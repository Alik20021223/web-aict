import { useState } from 'react';
import { SuccessPage } from '../../core/SuccessPage';
import { FormHelp } from '../../pages/Contacts/_components/FormHelp';

export const ParentContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        console.log('lox')
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        // Вернуть другую страницу
        return <SuccessPage link='/' btnTxt='backToMain' />;
    }

    return <FormHelp onSubmit={handleSubmit} />;
};