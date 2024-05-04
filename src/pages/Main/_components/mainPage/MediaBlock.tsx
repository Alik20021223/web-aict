import React from 'react'
import { Link } from 'react-router-dom'

export type PropsPress = {
    id: number,
    date: string,
    description: string,
    imgPress: {
        url: string,
        alt: string,
    }
    typePress?: string,
    place?: string
    link: string,
}

type PressApp = {
    data: PropsPress
}

export const PressBlock: React.FC<PressApp> = ({ data }) => {
    return (
        <div className='md:w-[30%] max-sm:w-full max-md:last:mb-0 flex-col flex'>
            <Link to={data.link}>
                <div className='rounded-md shadow-md flex justify-center items-center overflow-hidden'>
                    <img src={data.imgPress.url} className='w-full object-cover max-w-full h-full' alt={data.imgPress.alt} />
                </div>
                <div className='xl:p-[25px] md:p-[15px] max-md:p-6 2xl:p-[30px] lg:p-[15px]  flex flex-col bg-white dark:bg-dark text-textBlackAict dark:text-foreground shadow-md rounded-b-[10px]'>
                    {data.typePress && <div className='rounded-[5px] py-2.5 md:py-2 px-4 md:px-3 w-fit bg-grayAict dark:bg-darkBg'>
                        <p className='font-normal max-sm:text-sm max-md:text-lg text-foreground xl:text-sm md:text-xs lg:text-xs 2xl:text-xl'>{data.typePress}</p>
                    </div>}
                    <h1 className={`font-bold  2xl:text-4xl max-sm:text-lg text-wrap ${data.place ? '' : 'mt-[18px] 2xl:mt-6'} xl:text-2xl max-md:text-2xl lg:text-xl md:text-base`}>
                        {data.description}
                    </h1>
                    {data.place &&
                        <p className='font-normal max-sm:text-sm max-md:text-lg mt-[10px] 2xl:mt-[20px] text-primary lg:text-xs xl:text-sm 2xl:text-xl md:text-xs'>{data.place}</p>
                    }
                    <p className='mt-[30px] max-sm:text-sm 2xl:text-xl max-md:text-lg font-normal dark:text-foreground xl:text-base lg:text-sm md:text-xs opacity-70 text-[#2E363E]'>{data.date}</p>
                </div>
            </Link>
        </div>
    )
}
