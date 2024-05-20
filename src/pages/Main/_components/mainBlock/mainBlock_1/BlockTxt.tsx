import React from 'react'
import { BlockAppTxt } from './types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../state/store'

export const BlockTxt: React.FC<BlockAppTxt> = ({ data, currentPoint }) => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };


    const getValueByLanguage = (field: string) => {
        switch (currentLang.code) {
            case "ru":
                return field + "Ru";
            case "en":
                return field + "En";
            case "tj":
                return field + "Tj";
            default:
                return field;
        }
    };


    return (
        <div className='overflow-hidden'>
            <div className={`transition-all duration-200 min-h-full grid grid-cols-1 justify-center`} style={{ height: '300px', transform: `translateY(${currentPoint * -300}px)` }}>
                {data.map((item, i) => (
                    <div className="w-full h-[300px]" key={i}>
                        <p className="font-medium xl:text-base lg:text-sm max-lg:text-base max-sm:text-sm max-sm:mb-[15px]  mb-[25px] 2xl:mb-[40px] text-foreground">{formatDate(item.time)}</p>
                        <h1 className="font-bold xl:text-3xl lg:text-2xl max-lg:text-xl max-sm:text-lg text-foreground">{item[getValueByLanguage('title')]}</h1>
                        <div className="font-normal 2xl:mt-[40px] max-sm:mt-[15px] mt-[25px] max-lg:text-base max-sm:text-sm  lg:text-sm xl:text-base" dangerouslySetInnerHTML={{ __html: item[getValueByLanguage('description')] }}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
