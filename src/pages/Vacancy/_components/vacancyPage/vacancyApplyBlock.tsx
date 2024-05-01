import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { DownloadIcon } from "../../../../core/icons/download";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../state/store';
import { handleChangeLoading } from '../../../../state/defState/defSlice';
import { LoadingOverlay } from '../../../../core/Loading';
import { useTranslation } from 'react-i18next';

interface Props {
  onSubmit: () => void;
}

export interface FormFieldsVacancy {
  name: string,
  phone: string,
  email: string,
  message?: string,
  selectedFile: string
}

export const VacancyApplyBlock: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormFieldsVacancy>({
    name: '',
    phone: '',
    email: '',
    message: '',
    selectedFile: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>(); // Add type undefined to selectedFile state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loading = useSelector((state: RootState) => state.aict.Loading);
  const dispatch = useDispatch();
  const { email } = formData;

  useEffect(() => validateForm(), [formData])

  const {t} = useTranslation()

  // функия при добавления file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setFormData({ ...formData, selectedFile: URL.createObjectURL(event.target.files[0]) });
    }
  };

  // функия при изменении input and textArea
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  function validateForm() {
    const gap = { ...formData }
    if (gap.message === '') {
      delete gap.message;
    }
    setIsButtonDisabled(!Object.values(gap).every(Boolean) || !validateEmail(formData.email) || !selectedFile);
  }

  // функия нажатия submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isButtonDisabled) {
      setIsFormInvalid(true);
      return;
    }

    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      selectedFile: '',
    });
    setSelectedFile(undefined);

    dispatch(handleChangeLoading())
    setTimeout(() => {
      dispatch(handleChangeLoading())
      onSubmit()
    }, 3000)
  };

  //Функция для открытия формы для выбора файла
  const handleResumeButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  //Функиция на валидность email
  const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);


  //Проверка на валидность email
  const isInvalidEmail = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <div className="container m-auto max-sm:px-5 sm:px-5">
      <div className="md:bg-white md:shadow-md max-md:bg-transparent md:rounded-xl ">
        <div className="flex w-full flex-col items-center justify-center py-[50px]">
          <h1 className="font-bold text-2xl mb-[50px]">{t('ApplyVacancy')}</h1>
          <form onSubmit={handleSubmit} className="space-y-[30px] lg:w-1/3 2xl:w-1/4 max-lg:w-1/2 max-md:w-full">
            <Input
              name="name"
              type="text"
              variant="bordered"
              color="primary"
              size="lg"
              placeholder={t('urFio')}
              radius="lg"
              value={formData.name}
              onChange={handleInputChange}
              isInvalid={isFormInvalid && formData.name === ""}
              errorMessage={isFormInvalid && formData.name === "" && "Please enter your name"}
            />
            <Input
              name="phone"
              type="text"
              variant="bordered"
              color="primary"
              size="lg"
              placeholder={t('urPhone')}
              radius="lg"
              value={formData.phone}
              onChange={handleInputChange}
              isInvalid={isFormInvalid && formData.phone === ""}
              errorMessage={isFormInvalid && formData.phone === "" && "Please enter your phone number"}
            />
            <Input
              name="email"
              type="email"
              variant="bordered"
              color={isInvalidEmail ? "danger" : "primary"}
              size="lg"
              placeholder={t('urEmail')}
              radius="lg"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={isInvalidEmail || (isFormInvalid && formData.email === "")}
              errorMessage={(isInvalidEmail || (isFormInvalid && formData.email === "")) && "Please enter a valid email"}
            />
            <Textarea
              name="message"
              type="text"
              variant="bordered"
              color="primary"
              size="lg"
              placeholder={t('CoveringLetter')}
              radius="lg"
              value={formData.message}
              onChange={handleInputChange}
              isInvalid={isFormInvalid && formData.message === ""}
              errorMessage={isFormInvalid && formData.message === "" && "Please enter a message"}
            />
            <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
            {selectedFile && (
              <div className="mt-4">
                <p className="text-sm text-primary">Выбранный файл: {selectedFile?.name}</p>
              </div>
            )}
            <Button
              size="lg"
              startContent={<DownloadIcon />}
              className="bg-white w-full text-primary font-bold text-base border-2 border-primary"
              onClick={handleResumeButtonClick}
            >
              {t('uploadResume')}
            </Button>
            <Button type="submit" color={`${!isButtonDisabled ? 'primary' : 'default'}`} size="lg" className="w-full" disabled={isButtonDisabled}>
              {t('sendApplyBtn')}
            </Button>
          </form>
        </div>
      </div>
      <LoadingOverlay isLoading={loading} />
    </div>
  );
};
