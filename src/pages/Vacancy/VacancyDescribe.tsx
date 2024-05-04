// import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom"
// import { RootState } from "../../state/store"
// import { RespondBlock } from "../../widgets/VacancyWidgets/respondBlock";
// import { DescribeVacancy } from "../../widgets/VacancyWidgets/describeVacancy";
// import { RecomVacancy } from "../../widgets/VacancyWidgets/recomVacancy";
// import { useMemo } from "react";
// import { useTranslation } from "react-i18next";


// export const VacancyDescribe = () => {
//     const params = useParams<{ vacancyId: string }>();

//     const {t} = useTranslation();

//     const vacancyId = Number(params.vacancyId);
//     console.log(params.vacancyId)

//     const vacancyData = useSelector((state: RootState) => state.aict.VacancyBlock);

//     const item = useMemo(() => {
//         return vacancyData.find((vacancy) => vacancy.id === vacancyId);
//     }, [vacancyData, vacancyId]);




//     if (item) {
//         return (
//             <div className="container m-auto sm:px-5 max-sm:px-5 w-full">
//                 <div className="flex max-md:flex-col max-md:space-y-5  justify-between">
//                     <div className="md:w-[68%] max-md:w-full">
//                         <DescribeVacancy data={item} />
//                     </div>
//                     <div className="w-[30%] max-md:w-full">
//                         <RespondBlock data={item.respond} />
//                     </div>
//                 </div>
//                 <div className="mt-[60px]">
//                     <h1 className="font-bold text-3xl">{t('SimilarVacancies')}</h1>
//                     <div className="mt-10">
//                         <RecomVacancy data={vacancyData} />
//                     </div>
//                 </div>
//             </div>
//         );
//     } else {
//         return <div>Вакансия не найдена</div>;
//     }
// }
