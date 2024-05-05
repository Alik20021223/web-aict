import React from 'react'
import { SwiperTxt } from './types'
import { RootState } from '../../../../../../state/store'
import { useSelector } from 'react-redux'

interface SwiperTxtApp {
    data: SwiperTxt,
}

export const BlockTxtSwiper: React.FC<SwiperTxtApp> = ({ data }) => {
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;

    const descriptionWithoutH5 = description.split(/<h5\b[^>]*>/)[0];


    return (
        <div className='overflow-hidden'>
            <div className="w-[95%] mb-[50px]">
                <p className="font-medium xl:text-base lg:text-sm max-md:text-base max-sm:text-sm max-sm:mb-[15px]  mb-[25px] 2xl:mb-[40px] text-foreground">{formatDate(data.time)}</p>
                <h1 className="font-bold xl:text-3xl lg:text-2xl max-md:text-xl max-sm:text-lg text-foreground">{title}</h1>
                <p className="font-normal 2xl:mt-[40px] max-sm:mt-[15px] mt-[25px] max-md:text-base max-sm:text-sm  lg:text-sm xl:text-base text-foreground">{descriptionWithoutH5}</p>
            </div>
        </div>
    )
}
