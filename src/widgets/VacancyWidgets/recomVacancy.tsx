import React from "react";
import { RecomBlockVacancy } from "../../pages/Vacancy/_components/recomBlockVacancy"
import { VacancyApp } from "../../pages/Vacancy/_components/type";
import { RecomSlider } from "../../pages/Vacancy/_components/SliderRecom";


export const RecomVacancy: React.FC<VacancyApp> = ({ data }) => {


    const rowsPerPage = 3;

    // Создаем копию массива data
    const shuffledData = [...data];

    // Перемешиваем элементы массива shuffledData
    for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }

    // Выбираем первые три элемента из перемешанного массива
    const randomData = shuffledData.slice(0, rowsPerPage);

    return (
        <div>
            <div className="md:flex max-md:hidden space-x-8 max-xl:space-x-6 max-lg:space-x-4 w-full h-full">
                {randomData.map((item) => (
                    <div key={item.id} className="w-full h-full">
                        <RecomBlockVacancy data={item} />
                    </div>
                ))}
            </div>
            <div className="md:hidden max-md:flex">
                <RecomSlider data={randomData} />
            </div>
        </div>
    )
}
