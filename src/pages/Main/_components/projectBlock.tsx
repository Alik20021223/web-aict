import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { Link } from 'react-router-dom';

export type PropsProject = {
    id: number;
    slug: string;
    titleTj: string;
    titleRu: string;
    titleEn: string;
    descriptionTj: string;
    descriptionRu: string;
    descriptionEn: string;
    imagePath: string;
    time: string;
    created_at: string;
    updated_at: string;
    iconPath: string
}

type ProjectApp = {
    data: PropsProject
}

export const ProjectBlock: React.FC<ProjectApp> = ({ data }) => {
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)
    const time = (new Date(data.time)).getFullYear()



    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;

    return (
        <div className='py-10 max-sm:py-5 lg:py-6 max-md:last:mb-0 shadow-md pl-7 max-lg:px-7 rounded-xl bg-white dark:bg-dark text-foreground flex flex-col items-start'>
            <Link to={`projects/${time}/${data.slug}`}>
                <div className='w-[50px] h-[50px]'>
                    <img src={`${urlHosting}/${data.iconPath}`} className='w-full h-full object-cover' alt='icon-project' />
                </div>
                <div className='w-[80%] flex flex-col mt-6'>
                    <h2 className='font-semibold 2xl:mb-[20px] text-foreground mb-[10px] 2xl:text-2xl md:text-xl lg:text-sm xl:text-lg'>{title}</h2>
                    <div className='font-normal md:text-lg xl:text-sm lg:text-xs 2xl:text-lg dark:text-foreground text-[#2E363E] line-clamp-3' dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
            </Link>
        </div>
    )
}
