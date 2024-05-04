import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ProjectBlock } from '../../pages/Main/_components/mainPage/projectBlock'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export const ProjectsCom = () => {

    const {t} = useTranslation()

    const ProjectData = useSelector((state: RootState) => state.aict.ProjectData)

    return (
        <div className='pt-16 w-full pb-16'>
            <div className='flex justify-between'>
                <h1 className='font-bold xl:text-4xl 2xl:text-5xl lg:text-2xl md:text-xl text-foreground'>
                    {t("realizeProject")}
                </h1>
                <Link to="#" className='text-primary 2xl:text-2xl xl:text-[18px] lg:text-base font-semibold md:text-base'>
                    <span className="max-sm:hidden font-Manrope">{t('moreInfo')}</span>
                    <span className="max-sm:block hidden font-Manrope">{t('more')}</span>
                </Link>
            </div>
            <div className='flex max-sm:flex-col max-lg:flex-col max-sm:mt-[25px] max-sm:*:mb-[25px] lg:flex md:*:mb-[25px] sm:*:mb-5 justify-between mt-[40px] 2xl:mt-[60px]'>
                {ProjectData.map((item) => (
                    <ProjectBlock key={item.urlImg} data={item} />
                ))}
            </div>
        </div>
    )
}
