import { ExpandLess } from '@mui/icons-material'
import React from 'react'
import { PropsMainBlock_2 } from './types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../state/store'

interface MainBlock_3App {
  data: PropsMainBlock_2;
}


export const MainBlock_3: React.FC<MainBlock_3App> = ({ data }) => {

  console.log(data);
  

  const currentLang = useSelector((state: RootState) => state.aict.currentLang);

  const { t } = useTranslation()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  

  const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
  const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;

  return (
    <div className='bg-white dark:bg-dark shadow-md  w-full p-[25px] 2xl:p-[35px] h-full  flex flex-col justify-between rounded-2xl'>
      <div className='flex flex-col justify-between items-start text-foreground'>
        <p className='xl:mb-[25px] lg:mb-[15px] 2xl:text-lg xl:text-describe-xl dark:text-white lg:text-describe-lg'>{formatDate(data.created_at)}</p>
        <h1 className='font-semibold lg:mb-5 2xl:text-2xl xl:file:mb-[30px] lg:text-lg xl:text-xl'>{title}</h1>
        <p className='xl:text-describe-xl 2xl:text-xl dark:text-white lg:text-describe-lg'>{description.split(/<h5\b[^>]*>/)[0]}</p>
      </div>
      <Link to={`blog/articles/${data.slug}`} className='font-semibold 2xl:text-2xl  xl:text-base text-primary'>{t('more')}
        <ExpandLess className="rotate-90 !fill-primary" />
      </Link>
    </div>
  )
}
