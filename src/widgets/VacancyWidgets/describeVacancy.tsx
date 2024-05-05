import { useSelector } from "react-redux";
import { BlockVacancyType } from "../../pages/Vacancy/_components/type"
import { RootState } from "../../state/store";


interface DescribeApp {
  data: BlockVacancyType
}

export const DescribeVacancy: React.FC<DescribeApp> = ({ data }) => {
  const currentLang = useSelector((state: RootState) => state.aict.currentLang);


  const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
  const content = currentLang.code === 'ru' ? data.contentRu : currentLang.code === 'en' ? data.contentEn : data.contentTj;

  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="p-[30px] space-y-[30px] max-xl:space-y-6 max-lg:space-y-4">
        <h1 className='text-3xl max-lg:text-xl 2xl:text-2xl leading-8 font-bold'>{title}</h1>
        <div className="space-y-10 max-lg:space-y-6 blockDescribeVacancy" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div >
  )
}
