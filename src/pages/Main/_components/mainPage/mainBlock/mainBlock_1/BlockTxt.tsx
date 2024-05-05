import React from 'react'
import { BlockAppTxt } from './types'
import { useResize } from '../../../../../../hook/useWidthSize'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../state/store'

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


    

    const { width } = useResize();

    const md = width < 768 && width > 640;
    const lg = width <= 1024 && width > 178
    const xl = width >= 1024 && width <= 1280
    const sm = width <= 640





    return (
        <div className='overflow-hidden'>
            <div className={`transition-all duration-200 min-h-full flex flex-col gap-6 h-[300px] max-xl:h-[270px] max-md:h-[250px] max-sm:h-[220px]`} style={{ transform: `translateY(${md ? currentPoint * -250 : xl ? currentPoint * -275 : sm ? currentPoint * -220 : lg ? currentPoint * -265 :currentPoint * -300}px)` }}>
                {data.map((item, i) => (
                    <div className="w-[95%] mb-[50px]" key={i}>
                        <p className="font-medium xl:text-base lg:text-sm max-md:text-base max-sm:text-sm max-sm:mb-[15px]  mb-[25px] 2xl:mb-[40px] text-foreground">{formatDate(item.time)}</p>
                        <h1 className="font-bold xl:text-3xl lg:text-2xl max-md:text-xl max-sm:text-lg text-foreground">{item[getValueByLanguage('title')]}</h1>
                        <p className="font-normal 2xl:mt-[40px] max-sm:mt-[15px] mt-[25px] max-md:text-base max-sm:text-sm  lg:text-sm xl:text-base text-foreground line-clamp-2">{item[getValueByLanguage('description')]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
