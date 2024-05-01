import { Link, useParams } from "react-router-dom";
import { ButtonCom } from "../../core/Button";
import { BlockRespond } from "../../pages/Vacancy/_components/vacancyPage/type";
import { useTranslation } from "react-i18next";

interface Props {
    data: BlockRespond | undefined;
}

export const RespondBlock: React.FC<Props> = ({ data }) => {

    const {t} = useTranslation();

    const params = useParams<{ vacancyId: string }>();

    const vacancyId = Number(params.vacancyId);

    console.log(vacancyId)

    return (
        <div className="bg-white shadow-md w-full rounded-xl">
            <div className="p-7 flex flex-col">
                <h1 className="font-bold max-lg:text-xl text-2xl">{t('WorkingConditions')}</h1>
                <div className="flex flex-col max-md:justify-between space-y-6 max-xl:space-y-5 max-lg:space-y-4 mt-[30px] mb-[50px]">
                    <div className="flex">
                        <img src='/icons/town.svg' alt="city" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{data?.city}</p>
                    </div>
                    <div className="flex">
                        <img src='/icons/price.svg' alt="price" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{data?.money}</p>
                    </div>
                    <div className="flex">
                        <img src='/icons/schedule.svg' alt="schedule" />
                        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base ml-2.5">{data?.schedule}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/vacancy/${vacancyId}/apply`}>
                        <ButtonCom>{t('Reply')}</ButtonCom>
                    </Link>
                </div>
            </div>
        </div>
    );
};
