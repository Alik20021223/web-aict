import React from 'react'
import { ButtonCom } from '../../../../../core/Button'
import { PresidentApp } from './types'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'



export const MainBlock_2: React.FC<PresidentApp> = ({ data }) => {

    const { t } = useTranslation();

    return (
        <div className='bg-white shadow-md rounded-3xl w-full flex flex-col'>
            <div className='p-[25px] 2xl:p-[35px] flex max-md:flex-col justify-between'>
                <div className='rounded-xl w-[42%] max-md:w-full max-md:mb-10 overflow-hidden'>
                    <img
                        src={data.imgUrl.url}
                        alt={data.imgUrl.alt}
                        className='w-full h-full max-w-full object-cover'
                    />
                </div>
                <div className='flex w-[53%] max-md:w-full  flex-col justify-between'>
                    <div className='flex  flex-col items-start max-md:mb-8'>
                        <p className='text-describe max-md:text-lg max-sm:text-sm 2xl:text-lg max-md:mb-5  lg:text-sm  text-[#777B80]  xl:mb-[25px] lg:mb-[15px]'>{data.subtitle}</p>
                        <h1 className='font-bold max-md:text-2xl max-sm:text-lg  2xl:text-2xl max-md:mb-5 xl:mb-5 2xl:mb-8   lg:mb-[10px] xl:text-lg lg:text-base'>{data.title}</h1>
                        <p className='text-describe max-md:text-lg max-sm:text-sm 2xl:text-2xl lg:text-sm  text-[#777B80] xl:mb-[60px] lg:mb-10'>{data.describe}</p>
                    </div>
                    <Link className='w-full' to={data.Button.link}>
                        <ButtonCom>{t("learnMore")}</ButtonCom>
                    </Link>
                </div>
            </div>
        </div>
    )
}
