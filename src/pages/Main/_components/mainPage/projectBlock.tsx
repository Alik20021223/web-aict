import React from 'react'

export type PropsProject = {
    urlImg: string,
    title: string,
    describe: string,
    link: string,
}

type ProjectApp = {
    data: PropsProject
}

export const ProjectBlock: React.FC<ProjectApp> = ({ data }) => {
    return (
        <div className='py-10 max-sm:py-5 lg:py-6 lg:w-[30%] md:w-full max-md:last:mb-0 max-md:w-full shadow-md pl-7 max-lg:px-7 rounded-[10px] bg-white dark:bg-dark text-foreground flex flex-col items-start'>
            <div>
                <img src={data.urlImg} className='2xl:scale-110' alt='icon-project' />
            </div>
            <div className='w-[80%] flex flex-col mt-6'>
                <h2 className='font-semibold 2xl:mb-[20px] mb-[10px] 2xl:text-2xl md:text-xl lg:text-sm xl:text-lg'>{data.title}</h2>
                <p className='font-normal md:text-lg xl:text-sm lg:text-xs 2xl:text-lg dark:text-foreground text-[#2E363E]'>{data.describe}</p>
            </div>
            <a href={data.link}></a>
        </div>
    )
}
