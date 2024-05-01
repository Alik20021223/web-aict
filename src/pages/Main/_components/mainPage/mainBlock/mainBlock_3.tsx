import { ExpandLess } from '@mui/icons-material'
import React from 'react'
import { PropsApp } from './types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'



export const MainBlock_3: React.FC<PropsApp> = ({ data }) => {

  const {t} = useTranslation()

  return (
    <div className='bg-white shadow-md  w-full p-[25px] 2xl:p-[35px] h-full  flex flex-col justify-between rounded-2xl'>
      <div className=' flex flex-col justify-between items-start '>
        <p className='xl:mb-[25px] lg:mb-[15px] 2xl:text-lg xl:text-describe-xl lg:text-describe-lg'>{data.date}</p>
        <h1 className='font-semibold lg:mb-5 2xl:text-2xl xl:file:mb-[30px] lg:text-lg xl:text-xl'>{data.name}</h1>
        <p className='xl:text-describe-xl 2xl:text-xl lg:text-describe-lg'>{data.describe}</p>
      </div>
      <Link to={data.link} className='font-semibold 2xl:text-2xl  xl:text-base text-primary'>{t('more')}
        <ExpandLess className="rotate-90 !fill-primary" />
      </Link>
    </div>
  )
}
