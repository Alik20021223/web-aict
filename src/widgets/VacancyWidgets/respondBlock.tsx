import { Link, useParams } from "react-router-dom";
import { ButtonCom } from "../../core/Button";
import { BlockTypeOffer } from "../../pages/Vacancy/_components/type";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import api from "../../api";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

interface Props {
    city: number,
    schedules: number,
    experiences: number,
    money: string,
}

export const RespondBlock: React.FC<Props> = ({ city, schedules, experiences, money }) => {
    const [cities, setCities] = useState<BlockTypeOffer[]>([])
    const [schedulesList, setSchedulesList] = useState<BlockTypeOffer[]>([])
    const [experiencesList, setExperiencesList] = useState<BlockTypeOffer[]>([])
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const citiesRes = await api.get('/cities');
                setCities(citiesRes.data);

                const schedulesRes = await api.get('/schedules');
                setSchedulesList(schedulesRes.data);

                const experiencesRes = await api.get('/experiences');
                setExperiencesList(experiencesRes.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const foundCity = cities.find((item) => item.id === city);
    const foundSchedule = schedulesList.find((item) => item.id === schedules);
    const foundExperience = experiencesList.find((item) => item.id === experiences);

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

    const { t } = useTranslation();
    const { slug } = useParams();

    return (
        <div className="bg-white shadow-md w-full rounded-xl">
            <div className="p-7 flex flex-col">
                <h1 className="font-bold max-lg:text-xl text-2xl">{t('WorkingConditions')}</h1>
                <div className="flex flex-col max-md:justify-between space-y-6 max-xl:space-y-5 max-lg:space-y-4 mt-[30px] mb-[50px]">
                    <div className="flex">
                        <img src='/icons/town.svg' alt="city" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{foundCity?.[getValueByLanguage('title')]}</p>
                    </div>
                    <div className="flex">
                        <img src='/icons/price.svg' alt="price" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{money}</p>
                    </div>
                    <div className="flex">
                        <img src='/icons/schedule.svg' alt="schedule" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{foundSchedule?.[getValueByLanguage('title')]}</p>
                    </div>
                    <div className="flex">
                        <img width="20" height="20" src="/icons/experience.png" alt="experience" />
                        <p className="font-normal text-base ml-2.5">{foundExperience?.[getValueByLanguage("title")]}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/vacancy/${slug}/apply`}>
                        <ButtonCom>{t('Reply')}</ButtonCom>
                    </Link>
                </div>
            </div>
        </div>
    );
};
