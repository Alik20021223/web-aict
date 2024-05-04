// import React from "react"

// import { SearchInput } from "../../core/searchInput"
// import { Pagination, useSelect } from "@nextui-org/react";
// import { Link } from "react-router-dom";
// import { BlockVacancyType } from "../../pages/Vacancy/_components/vacancyPage/type";
// import { useSelector } from "react-redux";
// import { RootState } from "../../state/store";

// interface VacancyApp {
//     data: BlockVacancyType[];
//     currentPage: number,
//     total: number,
//     handleChangePage: (page:number) => void
// }


// export const BlockVacancy: React.FC<VacancyApp> = ({ data, currentPage, total, handleChangePage }) => {

//     const currentLang = useSelector((state: RootState) => state.aict.currentLang);




//     return (
//         <>
//             <div className="*:mb-8">
//                 <div className="max-lg:hidden">
//                     <SearchInput txt="searchVacancy" />
//                 </div>
//                 {data.map((item) => (
//                     <div className="bg-white shadow-md last:mb-0 rounded-xl" key={item.id}>
//                         <Link to={`/vacancy/${item.slug}`}>
//                             <div className="p-6 flex flex-col items-start">
//                                 <h1 className="lg:text-2xl font-bold max-sm:text-lg sm:text-lg md:text-xl">{item.name}</h1>
//                                 <p className="lg:text-base text-[#777B80] my-6 font-normal max-sm:text-xs sm:text-xs md:text-sm">{item.describe_1}</p>
//                                 <div className="flex w-[60%] max-xl:w-[80%] max-lg:space-y-4 max-lg:flex-col justify-between">
//                                     <div className="flex">
//                                         <img src='/icons/town.svg' alt="city" />
//                                         <p className="font-normal text-base ml-2.5">{item.respond.city}</p>
//                                     </div>
//                                     <div className="flex">
//                                         <img src='/icons/price.svg' alt="price" />
//                                         <p className="font-normal text-base ml-2.5">{item.price}</p>
//                                     </div>
//                                     <div className="flex">
//                                         <img src='/icons/schedule.svg' alt="schedule" />
//                                         <p className="font-normal text-base ml-2.5">{item.respond.schedule}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//                 <Pagination
//                     classNames={{ item: ["bg-white"], prev: ["bg-white"], next: "bg-white" }}
//                     showShadow
//                     size="lg"
//                     loop
//                     showControls
//                     color="primary"
//                     initialPage={1}
//                     page={currentPage}
//                     total={total}
//                     onChange={(page) => handleChangePage(page)}
//                 />
//             </div >
//         </>
//     )
// }
