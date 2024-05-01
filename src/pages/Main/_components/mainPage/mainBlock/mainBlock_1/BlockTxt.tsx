import React from 'react'
import { BlockAppTxt } from './types'
import { useResize } from '../../../../../../hook/useWidthSize'

export const BlockTxt: React.FC<BlockAppTxt> = ({ data, currentPoint }) => {

    const { width } = useResize();

    const md = width < 768 && width > 640;
    const xl = width >= 1024 && width <= 1280
    const sm = width <= 640



    return (
        <div className='overflow-hidden'>
            <div className={`transition-all duration-200 min-h-full flex flex-col gap-6 h-[320px] max-xl:h-[300px] max-md:h-[250px]`} style={{ transform: `translateY(${md ? currentPoint * -270 : xl ? currentPoint * -300 : sm ? currentPoint * -290 : currentPoint * -343}px)` }}>
                {data.map((item, i) => (
                    <div className="w-[95%] mb-[50px]" key={i}>
                        <p className="font-medium xl:text-base lg:text-sm max-md:text-base max-sm:text-sm max-sm:mb-[15px]  mb-[25px] 2xl:mb-[40px] text-[#777B80]">{item.date}</p>
                        <h1 className="font-bold xl:text-3xl lg:text-2xl max-md:text-xl max-sm:text-lg">{item.name}</h1>
                        <p className="font-normal 2xl:mt-[40px] max-sm:mt-[15px] mt-[25px] max-md:text-base max-sm:text-sm  lg:text-sm xl:text-base text-[#777B80]">{item.describe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
