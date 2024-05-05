import { ProjectBlock, PropsProject } from '../../pages/Main/_components/mainPage/projectBlock'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../api'


export const ProjectsCom = () => {

    const [data, setData] = useState<PropsProject[]>([])

    const {t} = useTranslation()

    useEffect(() => {
        api.get('projects/per-page/3').then(res => {
            setData(res.data.data)
        }).catch((err) => console.log(err))
    }, [])

    return (
        <div className='w-full'>
            <div className='flex justify-between'>
                <h1 className='font-bold xl:text-4xl 2xl:text-5xl lg:text-2xl md:text-xl text-foreground'>
                    {t("realizeProject")}
                </h1>
                <Link to="/projects" className='text-primary 2xl:text-2xl xl:text-[18px] lg:text-base font-semibold md:text-base'>
                    <span className="max-sm:hidden font-Manrope">{t('moreInfo')}</span>
                    <span className="max-sm:block hidden font-Manrope">{t('more')}</span>
                </Link>
            </div>
            <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-4 max-sm:mt-[25px] max-sm:*:mb-[25px] md:*:mb-[25px] sm:*:mb-5 mt-[40px] 2xl:mt-[60px]'>
                {data.map((item) => (
                    <ProjectBlock key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}
