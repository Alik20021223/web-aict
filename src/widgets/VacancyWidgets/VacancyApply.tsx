import { useEffect, useState } from 'react';
import { VacancyApplyBlock } from '../../pages/Vacancy/_components/vacancyApplyBlock';
import { SuccessPage } from '../../core/SuccessPage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeLoading } from '../../state/defState/defSlice';
import api from '../../api';
import { useParams } from 'react-router-dom';
import { BlockVacancyType, VacancyTg } from '../../pages/Vacancy/_components/type';
import { RootState } from '../../state/store';



export const ParentApplyVacancy = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resFormData, setResFormData] = useState<VacancyTg>();
  const [isData, setData] = useState<BlockVacancyType>()
  const [messageSent, setMessageSent] = useState(false);
  const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`vacancies/${slug}`);
      setData(response.data)
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (resFormData && !messageSent) {
      dispatch(handleChangeLoading());
      sendToTelegramChat(resFormData);
      setIsSubmitted(true);
    }
  }, [resFormData, messageSent, dispatch]);


  const handleFormData = (data: VacancyTg) => {
    const vacancyTitle = isData?.titleRu || "Unknown";
    setResFormData({ ...data, vacancy: vacancyTitle });
  };

  async function sendToTelegramChat(formData: VacancyTg) {
    try {
      const chatId = '-4277594535'; // Замените на ID вашего чата
      const token = '7127468189:AAF0w-ImLOUXz4d89S_RVuhub33ygt5AliI';

      const message = `Отклик на вакансию:
        ФИО:${formData.fullName}
        Номер телефона: ${formData.phone}
        Почта: ${formData.email}
        ${formData.message && `Описание:${formData.message}`}
        На вакансию:${formData.vacancy}
        Резюме:${urlHosting}/${formData.cvPath}
      `; // Преобразование объекта formData в JSON-строку
      const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

      // Отправка сообщения в чат Telegram
      await axios.post(apiUrl, {
        chat_id: chatId,
        text: message
      });

      setMessageSent(true);

    } catch (error) {
      console.error('Ошибка отправки данных в чат Telegram:', error);
    }
  }

  if (isSubmitted) {
    // Вернуть другую страницу
    return <SuccessPage link='/vacancies' btnTxt='backToVacancy' />;
  }

  return <VacancyApplyBlock handleFormData={handleFormData} />;
};
