import { useParams } from "react-router-dom"
import { RespondBlock } from "../../widgets/VacancyWidgets/respondBlock";
import { DescribeVacancy } from "../../widgets/VacancyWidgets/describeVacancy";
import { RecomVacancy } from "../../widgets/VacancyWidgets/recomVacancy";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "../../api";
import { BlockVacancyType } from "./_components/type";
import { useDispatch } from "react-redux";
import { setLoadingPage } from "../../state/pagesSlice";


export const VacancyDescribe = () => {
    const { slug } = useParams();

    const [isData, setData] = useState<BlockVacancyType>()
    const [isRecom, setRecom] = useState<BlockVacancyType[]>([])


    const dispatch = useDispatch()


    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoadingPage(true))
                const res = await api.get(`vacancies/${slug}`);
                setData(res.data);

                const formData = {
                    industryId: res.data.industryId,
                };

                const response = await api.post(`/vacancies/per-page/20/filter`, formData);

                const recom = response.data.data.filter((item: BlockVacancyType) => item.slug != slug)

                setRecom(recom);
            } catch (error) {
                console.error('There was an error!', error);
            } finally {
                dispatch(setLoadingPage(false))
            }
        };

        fetchData();
    }, []);



    const { t } = useTranslation();


    return (
        isData && <div className="container m-auto sm:px-5 max-sm:px-5 w-full">
            <div className="flex max-md:flex-col max-md:space-y-5  justify-between">
                <div className="md:w-[68%] max-md:w-full">
                    <DescribeVacancy data={isData} />
                </div>
                <div className="w-[30%] max-md:w-full">
                    <RespondBlock city={isData.cityId} money={isData.price} schedules={isData.scheduleId} experiences={isData.industryId} />
                </div>
            </div>
            <div className="mt-[60px]">
                <h1 className="font-bold text-3xl">{t('SimilarVacancies')}</h1>
                <div className="mt-10">
                    <RecomVacancy data={isRecom} />
                </div>
            </div>
        </div>
    );
}
