import React from "react"


import { Pagination } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BlockVacancyType } from "../../pages/Vacancy/_components/type";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import { useTranslation } from "react-i18next";
import SearchInput from "../search/searchInput";

interface VacancyApp {
    data: BlockVacancyType[];
    currentPage: number,
    total: number,
    handleChangePage: (page: number) => void
}


export const BlockVacancy: React.FC<VacancyApp> = ({ data, currentPage, total, handleChangePage }) => {
    const { t } = useTranslation()

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
        <>
            {data.length !== 0 ? <div className="*:mb-8">
                <div className="max-lg:hidden">
                    <SearchInput placeholder="searchVacancy" type="vacancy"/>
                </div>
                {data.map((item) => (
                    <div className="bg-white shadow-md last:mb-0 rounded-xl" key={item.id}>
                        <Link to={`/vacancies/${item.slug}`}>
                            <div className="p-6 flex flex-col items-start">
                                <h1 className="lg:text-2xl font-bold max-sm:text-lg sm:text-lg md:text-xl">{item[getValueByLanguage("title")]}</h1>
                                <p className="lg:text-base text-[#777B80] my-6 font-normal max-sm:text-xs sm:text-xs md:text-sm">{item[getValueByLanguage("content")].split(/<h5\b[^>]*>/)[0]}</p>
                                <div className="flex w-[60%] max-xl:w-[80%] max-lg:space-y-4 max-lg:flex-col justify-between">
                                    <div className="flex">
                                        <img src='/icons/town.svg' alt="city" />
                                        <p className="font-normal text-base ml-2.5">{item.city[getValueByLanguage("title")]}</p>
                                    </div>
                                    <div className="flex">
                                        <img src='/icons/price.svg' alt="price" />
                                        <p className="font-normal text-base ml-2.5">{item.price}</p>
                                    </div>
                                    <div className="flex">
                                        <img src='/icons/schedule.svg' alt="schedule" />
                                        <p className="font-normal text-base ml-2.5">{item.schedule[getValueByLanguage("title")]}</p>
                                    </div>
                                    <div className="flex">
                                        <img width="20" height="20" src="/icons/experience.png" alt="experience" />
                                        <p className="font-normal text-base ml-2.5">{item.experience[getValueByLanguage("title")]}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <Pagination
                    classNames={{ item: ["bg-white"], prev: ["bg-white"], next: "bg-white" }}
                    showShadow
                    size="lg"
                    loop
                    showControls
                    color="primary"
                    initialPage={1}
                    page={currentPage}
                    total={total}
                    onChange={(page) => handleChangePage(page)}
                />
            </div >
                : <h1 className="font-bold text-xl">{t('emptyVacancy')}</h1>
            }
        </>
    )
}
