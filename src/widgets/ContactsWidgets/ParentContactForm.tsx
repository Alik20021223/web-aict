import { useEffect, useState } from 'react';
import { SuccessPage } from '../../core/SuccessPage';
import { FormHelp } from '../../pages/Contacts/_components/FormHelp';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeLoading } from '../../state/defState/defSlice';
import { RootState } from '../../state/store';
import { FormDataType } from '../../pages/Contacts/_components/types';
import axios from 'axios';

export const ParentContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [resFormData, setResFormData] = useState<FormDataType>();

    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
    const dispatch = useDispatch();

    const handleSubmit = (data: FormDataType) => {
        setResFormData(data)
    };

    useEffect(() => {
        if (resFormData && !messageSent) {
          dispatch(handleChangeLoading());
          sendToTelegramChat(resFormData);
          setIsSubmitted(true);
        }
      }, [resFormData, messageSent, dispatch]);


    async function sendToTelegramChat(formData: FormDataType) {
        
        try {
            const chatId = '-4277594535'; // Замените на ID вашего чата
            const token = '7127468189:AAF0w-ImLOUXz4d89S_RVuhub33ygt5AliI';

            const message = `Предложение по улучшению:
            ФИО:${formData.fullName}
            Место работы: ${formData.workPlace}
            Страна: ${formData.country}
            Город: ${formData.city}
            Адрес: ${formData.street}
            Номер телефона: ${formData.phone}
            Почта: ${formData.email}
            Тема: ${formData.theme}
            Описание:${formData.description}
            Дополнительный файл:${urlHosting}/${formData.filePath}
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
        return <SuccessPage link='/' btnTxt='backToMain' />;
    }

    return <FormHelp handleFormData={handleSubmit} />;
};