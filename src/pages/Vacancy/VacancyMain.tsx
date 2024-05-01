import { useSelector } from "react-redux"
import { BlockVacancy } from "../../widgets/VacancyWidgets/blockVacancy"
import { RootState } from "../../state/store"
import { FilterCom } from "../../widgets/VacancyWidgets/filterCom"
import { Button, useDisclosure } from "@nextui-org/react"
import { ModalFilter } from "../../widgets/VacancyWidgets/ModalFilter"



const Vacancy = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const vacancyData = useSelector((state: RootState) => state.aict.VacancyBlock)

  return (
    <div className='m-auto container sm:px-5 max-sm:px-5 w-full'>
      <div className="flex max-lg:flex-col max-lg:space-y-8 justify-between items-start">
        <div className="w-[35%] max-lg:hidden">
          <FilterCom />
        </div>
        <div className="max-lg:block hidden w-full">
          <Button onClick={() => onOpen()} className="bg-white w-full py-8 text-primary border-2 border-primary max-md:text-xl" radius="lg" size="lg">Настроить фильтр</Button>
        </div>
        <div className="lg:w-[60%] max-sm:w-full sm:full">
          <BlockVacancy data={vacancyData} />
        </div>
      </div>
      <ModalFilter isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default Vacancy