import { useState } from 'react';
import { VacancyApplyBlock } from '../../pages/Vacancy/_components/vacancyPage/vacancyApplyBlock';
import { SuccessPage } from '../../core/SuccessPage';

export const ParentApplyVacancy = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    // Вернуть другую страницу
    return <SuccessPage link='/vacancy' btnTxt='backToVacancy' />;
  }

  return <VacancyApplyBlock onSubmit={handleSubmit} />;
};