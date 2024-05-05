import React from 'react'
import { Link } from 'react-router-dom'
import { BlogBlockType } from '../../../Blog/_components/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../state/store'

export type PropsPress = {
    category?: string;
    id: number;
    titleTj: string;
    titleRu: string;
    titleEn: string;
    descriptionTj: string;
    descriptionRu: string;
    descriptionEn: string;
    addressTj?: string;
    addressRu?: string;
    addressEn?: string;
    slug: string;
    type?: string
    filePath?: string;
    imagePath?: string;
    created_at: string;
}

type PressApp = {
    data: PropsPress
}

export const PressBlock: React.FC<PressApp> = ({ data }) => {
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;
    const address = currentLang.code === 'ru' ? data.addressRu : currentLang.code === 'en' ? data.addressEn : data.addressTj;

    return (
        <div className='max-sm:w-full max-md:last:mb-0 flex-col flex h-full'>
            <Link to={address ? `/gallery` : `/blog/${data.category}/${data.slug}`} className='h-full'>
                <div className='rounded-md shadow-md flex justify-center items-center overflow-hidden h-[50%]'>
                    <img src={data.imagePath || data.filePath} className='w-full object-cover max-w-full h-full' alt={data.slug} />
                </div>
                <div className='xl:p-6 md:p-4 max-md:p-6 2xl:p-7 lg:p-4 space-y-5  flex flex-col  bg-white dark:bg-dark text-textBlackAict dark:text-foreground shadow-md rounded-b-[10px]'>
                    {data.category && <div className='rounded-[5px] py-2.5 md:py-2 px-4 md:px-3 w-fit bg-grayAict dark:bg-darkBg'>
                        <p className='font-normal max-sm:text-sm max-md:text-lg text-foreground xl:text-sm md:text-xs lg:text-xs 2xl:text-xl'>{data.category}</p>
                    </div>}
                    <h1 className={`font-bold  2xl:text-4xl max-sm:text-lg text-wrap xl:text-xl max-md:text-xl lg:text-xl md:text-base`}>
                        {description}
                    </h1>
                    {data.addressEn &&
                        <p className='font-normal max-sm:text-sm max-md:text-lg text-primary lg:text-xs xl:text-sm 2xl:text-xl md:text-xs'>{address}</p>
                    }
                    <p className='mt-[30px] max-sm:text-sm 2xl:text-xl max-md:text-lg font-normal dark:text-foreground xl:text-base lg:text-sm md:text-xs opacity-70 text-[#2E363E]'>{formatDate(data.created_at)}</p>
                </div>
            </Link>
        </div>
    )
}
