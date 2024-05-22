import React from 'react'
import { Link } from 'react-router-dom'
import { BlockVacancyType } from './type'
import { RootState } from '../../../state/store';
import { useSelector } from 'react-redux';

interface RecomApp {
    data: BlockVacancyType;
}

export const RecomBlockVacancy: React.FC<RecomApp> = ({ data }) => {
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);

    const getValueByLanguage = (field: string) => {
        switch (currentLang.code) {
            case "ru":
                return field + "Ru";
            case "en":
                return field + "En";
            case "tj":
                return field + "Tj";
            default:
                return field;
        }
    };


    return (
        <div className="bg-white shadow-md last:mb-0 rounded-xl w-full h-full" key={data.id}>
            <Link to={`/vacancy/${data.slug}`} className='h-full inline-block'>
                <div className="p-6 flex flex-col items-start">
                    <h1 className="lg:text-2xl font-bold max-sm:text-lg sm:text-lg md:text-xl">{data[getValueByLanguage("title")]}</h1>
                    <div className="lg:text-base text-[#777B80] my-6 font-normal max-sm:text-xs sm:text-xs md:text-sm text-foreground" dangerouslySetInnerHTML={{__html: data[getValueByLanguage("content")]}}></div>
                    <div className="flex space-y-4 flex-col justify-between">
                        <div className="flex">
                            <img src='/icons/town.svg' alt="city" />
                            <p className="font-normal text-base ml-2.5">{data.city[getValueByLanguage("title")]}</p>
                        </div>
                        <div className="flex">
                            <img src='/icons/price.svg' alt="price" />
                            <p className="font-normal text-base ml-2.5">{data.price}</p>
                        </div>
                        <div className="flex">
                            <img src='/icons/schedule.svg' alt="schedule" />
                            <p className="font-normal text-base ml-2.5">{data.schedule[getValueByLanguage("title")]}</p>
                        </div>
                        <div className="flex">
                            <img width="20" height="20" src="/icons/experience.png" alt="experience" />
                            <p className="font-normal text-base ml-2.5">{data.experience[getValueByLanguage("title")]}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
