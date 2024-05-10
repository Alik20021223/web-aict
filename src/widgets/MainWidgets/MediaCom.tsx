import { Link } from 'react-router-dom'
import { PressBlock, PropsPress } from '../../pages/Main/_components/mainPage/MediaBlock'
import { ProjectSlider } from '../../pages/Main/_components/mainPage/SlickerProject'
import { useTranslation } from 'react-i18next'


export type Block = {
    data: PropsPress[],
    name: string,
    link: string,
    linkTxt: string,
}

export const MediaCom = ({ data, name, link, linkTxt }: Block) => {

    const { t } = useTranslation()

    return (
        <div className='w-full'>
            <div className='flex justify-between'>
                <h1 className='font-bold max-sm:text-lg xl:text-4xl text-foreground lg:text-2xl 2xl:text-5xl'>
                    {t(name)}
                </h1>
                <Link to={link} className='text-primary max-sm:text-sm xl:text-[18px] lg:text-base 2xl:text-2xl font-Manrope font-semibold'>{t(linkTxt)}</Link>
            </div>
            <div className='grid md:grid-cols-3 gap-5 max-md:hidden mt-[40px] h-full w-full'>
                {data.map((item) => (
                    <PressBlock key={item.id} data={item} />
                ))}
            </div>
            <div className='max-lg:flex hidden mt-6'>
                <ProjectSlider data={data} />
            </div>
        </div>
    )
}
