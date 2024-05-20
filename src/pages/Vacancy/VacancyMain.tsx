
import { BlockVacancy } from "../../widgets/VacancyWidgets/blockVacancy"
import { FilterCom } from "../../widgets/VacancyWidgets/filterCom"
import { Button, useDisclosure } from "@nextui-org/react"
import { ModalFilter } from "../../widgets/VacancyWidgets/ModalFilter"
import { useEffect, useState } from "react"
import api from "../../api"

import { BlockTypeOffer, BlockVacancyType } from "./_components/type"
import { useSearchParams } from "react-router-dom"
import { RootState } from "../../state/store"
import { useDispatch, useSelector } from "react-redux"
import { ErrorBlock } from "../../core/Error"
import { setLoadingPage } from "../../state/pagesSlice"



const Vacancy = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<BlockVacancyType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [cities, setCity] = useState<BlockTypeOffer[]>([])
  const [industries, setIndustries] = useState<BlockTypeOffer[]>([])
  const [schedules, setSchedules] = useState<BlockTypeOffer[]>([])
  const [experiences, setExperiences] = useState<BlockTypeOffer[]>([])
  const formData = useSelector((state: RootState) => state.aict.FormDataNumber);
  const formDataSubmit = useSelector((state: RootState) => state.aict.formDataSubmit);
  const cleanFilter = useSelector((state: RootState) => state.aict.formDataClean);
  const [errorPage, setError] = useState<boolean>(false);

  const dispatch = useDispatch()



  useEffect(() => {
    const timer = async () => {
      try {
        dispatch(setLoadingPage(true));
        await new Promise(resolve => setTimeout(resolve, 750));
      } finally {
        dispatch(setLoadingPage(false));
      }
    };

    timer();
  }, []);



  useEffect(() => {
    if (formDataSubmit) {
      console.log(formData);

      api.post('/vacancies/per-page/4/filter', formData)
        .then(response => {
          setData(response.data.data)
          setTotalPage(response.data.last_page)
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  }, [formDataSubmit, formData])

  useEffect(() => {
    if (cleanFilter) {
      api
        .get(`vacancies/per-page/4?page=1`)
        .then((res) => {
          setData(res.data.data);
          setTotalPage(res.data.last_page)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const pageParam = searchParams.get("page") || 1;
    setCurrentPage(Number(pageParam));

    api
      .get(`vacancies/per-page/4?page=${pageParam}`)
      .then((res) => {
        setData(res.data.data);
        setTotalPage(res.data.last_page)
      })
      .catch(() => {
        
        setError(true)
      });
    api.get('/cities').then(res => setCity(res.data)).catch(err => console.log(err))
    api.get('/industries').then(res => setIndustries(res.data)).catch(err => console.log(err))
    api.get('/schedules').then(res => setSchedules(res.data)).catch(err => console.log(err))
    api.get('/experiences').then(res => setExperiences(res.data)).catch(err => console.log(err))
  }, [currentPage, cleanFilter]);

  const handleChangePage = (newPage: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(newPage);
    const params: { [key: string]: string } = { page: newPage.toString() };
    setSearchParams(params);
  };



  return (
    errorPage ? <ErrorBlock /> : <div className='m-auto container sm:px-5 max-sm:px-5 w-full'>
      <div className="flex max-lg:flex-col max-lg:space-y-8 justify-between items-start">
        <div className="w-[35%] max-lg:hidden">
          <FilterCom city={cities} industries={industries} schedules={schedules} experiences={experiences} />
        </div>
        <div className="max-lg:block hidden w-full">
          <Button onClick={() => onOpen()} className="bg-white w-full py-8 text-primary border-2 border-primary max-md:text-xl" radius="lg" size="lg">Настроить фильтр</Button>
        </div>
        <div className="lg:w-[60%] max-sm:w-full sm:full">
          <BlockVacancy data={data} currentPage={currentPage} total={totalPage} handleChangePage={handleChangePage} />
        </div>
      </div>
      <ModalFilter city={cities} industries={industries} schedules={schedules} experiences={experiences} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default Vacancy