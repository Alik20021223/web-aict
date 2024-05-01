import { DetailBlockInfo } from "../../pages/Vacancy/_components/vacancyPage/detailBlockInfo"
import { BlockVacancy } from "../../pages/Vacancy/_components/vacancyPage/type"

interface DescribeApp {
  data: BlockVacancy
}

export const DescribeVacancy: React.FC<DescribeApp> = ({ data }) => {

  const { detail } = data

  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="p-[30px] space-y-[30px] max-xl:space-y-6 max-lg:space-y-4">
        <h1 className='text-3xl max-lg:text-xl 2xl:text-2xl leading-8 font-bold'>{data.name}</h1>
        <p className="font-normal max-lg:text-sm 2xl:text-xl text-base">{detail.describe}</p>
        <DetailBlockInfo name="Вы будете" value={detail.responsibilities} />
        <DetailBlockInfo name="Вам понадобится" value={detail.requirements} />
        <DetailBlockInfo name="Мы точно оценим эти качества" value={detail.additionally} />
        <DetailBlockInfo name="Мы предлагаем" value={detail.ourOffer} />
      </div>
    </div>
  )
}
