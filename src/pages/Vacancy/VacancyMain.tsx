// // import { useSelector } from "react-redux"
// // import { BlockVacancy } from "../../widgets/VacancyWidgets/blockVacancy"
// // import { RootState } from "../../state/store"
// import { FilterCom } from "../../widgets/VacancyWidgets/filterCom"
// import { Button, useDisclosure } from "@nextui-org/react"
// import { ModalFilter } from "../../widgets/VacancyWidgets/ModalFilter"
// import { useEffect, useState } from "react"
// import api from "../../api"
// import { useResize } from "../../hook/useWidthSize"
// import { BlockVacancyType } from "./_components/vacancyPage/type"



// const Vacancy = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [data, setData] = useState<BlockVacancyType[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPage, setTotalPage] = useState<number>(1);
//   const { width } = useResize();
//   const maxLg = width < 1280 && width > 768;
//   const maxMd = width < 768;


//   const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

//   useEffect(() => {
//     api
//       .get(`vacancies/per-page/${pageAdaptive}`)
//       .then((res) => {
//         setData(res.data.data);
//         setTotalPage(res.data.last_page)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [currentPage]);

  

//   return (
//     <div className='m-auto container sm:px-5 max-sm:px-5 w-full'>
//       <div className="flex max-lg:flex-col max-lg:space-y-8 justify-between items-start">
//         <div className="w-[35%] max-lg:hidden">
//           <FilterCom />
//         </div>
//         <div className="max-lg:block hidden w-full">
//           <Button onClick={() => onOpen()} className="bg-white w-full py-8 text-primary border-2 border-primary max-md:text-xl" radius="lg" size="lg">Настроить фильтр</Button>
//         </div>
//         {/* <div className="lg:w-[60%] max-sm:w-full sm:full">
//           <BlockVacancy data={vacancyData} />
//         </div> */}
//       </div>
//       <ModalFilter isOpen={isOpen} onOpenChange={onOpenChange} />
//     </div>
//   )
// }

// export default Vacancy