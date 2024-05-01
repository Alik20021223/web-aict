import { Button, Input } from "@nextui-org/react"
import React, { useEffect, useRef, useState } from "react"
import { DownloadIcon } from "../../../core/icons/download";
import { Textarea } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { countries } from 'country-list-json';
import { Select, SelectItem, } from "@nextui-org/react";
import { LoadingOverlay } from "../../../core/Loading";
import { useTranslation } from "react-i18next";

interface Props {
    onSubmit: () => void;
}


interface formDataFields {
    fullName: string;
    country: string;
    job: string;
    city: string;
    phone: string;
    email: string;
    address: string;
    request: string;
    subjectRequest: string;
    file?: string;
}


export const FormHelp: React.FC<Props> = ({ onSubmit }) => {

    const [formData, setFormData] = useState<formDataFields>({
        fullName: '',
        job: '',
        country: '',
        city: '',
        phone: '',
        email: '',
        address: '',
        request: '',
        subjectRequest: '',
    })

    const ContactForm = useSelector((state: RootState) => state.aict.ContactForm)
    const [selectedFile, setSelectedFile] = useState<File>();
    const [loading, setLoading] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const {t} = useTranslation();

    useEffect(() => {
        if (Object.values(formData).every(value => value !== '' && value !== null)) {
            validateForm();
        }
    }, [formData]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onSubmit();
        }, 3000)
        console.log(formData)
    }

    const validateForm = () => {

        const isFormValid = Object.values(formData).every(value => value !== '' && value !== null) && validateEmail(formData.email);
        setIsButtonDisabled(!isFormValid);
    };


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
            setFormData({ ...formData, file: URL.createObjectURL(event.target.files[0]) });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let selectedValue = null;


        if (name === 'country') {
            const select = countries.find((item) => item.name === value);

            selectedValue = select?.name;
        } else {
            selectedValue = value;
        }


        setFormData({
            ...formData,
            [name]: selectedValue,
        });
    }

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);


    return (
        <div className="m-auto container sm:px-5 max-sm:px-5">
            <div className="bg-white rounded-xl w-full">
                <div className="py-[50px] flex flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl">{t('recordReq')}</h1>
                    <div className="flex w-1/3 mt-[50px] space-y-[30px] flex-col">
                        <form action="submit" onSubmit={handleSubmit} className="space-y-[30px]">
                            {ContactForm.map((item) =>
                                item.id !== 3 ? (
                                    <Input
                                        aria-label={item.name}
                                        key={item.name}
                                        type="text"
                                        variant="bordered"
                                        color='primary'
                                        onChange={handleChange}
                                        name={item.name}
                                        placeholder={t(item.value)}
                                    />
                                ) : (
                                    <Select
                                        aria-label={item.name}
                                        placeholder={t(item.value)}
                                        name={item.name}
                                        variant="bordered"
                                        color="primary"
                                        classNames={{ trigger: 'bg-white' }}
                                        className="max-w-full !bg-white tex-black"
                                        key={item.name}
                                        onChange={handleChange}
                                    >
                                        {countries.map((item) => (
                                            <SelectItem key={item.name} startContent={item.flag}>
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                ))}
                            <Textarea variant="bordered" name="request" onChange={handleChange} color="primary" placeholder={t('describeRequest')} />
                            <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                            {selectedFile && (
                                <div className="mt-4">
                                    <p className="text-sm text-primary">{t('selectedFile')}: {selectedFile?.name}</p>
                                </div>
                            )}
                            <Button
                                size="lg"
                                startContent={<DownloadIcon />}
                                className="bg-white w-full text-primary font-bold text-base border-2 border-primary"
                                onClick={handleFileButtonClick}
                            >
                                {t('uploadExtraFile')}
                            </Button>
                            <Button
                                isDisabled={isButtonDisabled}
                                size="lg"
                                color="primary"
                                className="w-full"
                                type="submit"
                            >
                                {t('SendRequest')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <LoadingOverlay isLoading={loading} />
        </div >
    )
}
