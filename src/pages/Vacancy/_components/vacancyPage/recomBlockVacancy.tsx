// import React from 'react'
// import { Link } from 'react-router-dom'
// import { BlockVacancy } from './type'

// interface RecomApp {
//     data: BlockVacancy;
// }

// export const RecomBlockVacancy: React.FC<RecomApp> = ({ data }) => {


//     return (
//         <div className="bg-white shadow-md last:mb-0 rounded-xl" key={data.id}>
//             <Link to={`/vacancy/${data.id}`}>
//                 <div className="py-6 px-5 flex flex-col items-start">
//                     <h1 className="lg:text-xl 2xl:text-2xl font-bold max-sm:text-lg sm:text-lg max-lg:text-lg">{data.name}</h1>
//                     <p className="lg:text-base text-[#777B80] 2xl:text-lg my-6 font-normal max-sm:text-xs sm:text-xs max-lg:text-sm">{data.describe_1}</p>
//                     <div className="flex max-lg:w-[80%] flex-col max-md:w-full w-[60%] space-y-5 max-md:space-y-4 justify-between">
//                         <div className="flex">
//                             <img src='/icons/town.svg' alt="city" />
//                             <p className="font-normal max-lg:text-sm 2xl:text-lg text-base ml-2.5">{data.respond.city}</p>
//                         </div>
//                         <div className="flex">
//                             <img src='/icons/price.svg' alt="price" />
//                             <p className="font-normal max-lg:text-sm 2xl:text-lg text-base ml-2.5">{data.respond.money}</p>
//                         </div>
//                         <div className="flex">
//                             <img src='/icons/schedule.svg' alt="schedule" />
//                             <p className="font-normal max-lg:text-sm 2xl:text-lg text-base ml-2.5">{data.respond.schedule}</p>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     )
// }
