import { Link } from 'react-router-dom'
import { PressBlock, PropsPress } from '../../pages/Main/_components/MediaBlock'
import { ProjectSlider } from '../../pages/Main/_components/SlickerProject'
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
        <div className='w-full space-y-10'>
            <div className='flex justify-between'>
                <h1 className='font-bold xl:text-4xl 2xl:text-5xl max-sm:text-lg max-lg:text-2xl max-md:text-xl text-foreground lg:text-3xl'>
                    {t(name)}
                </h1>
                <Link to={link} className='text-primary max-sm:text-sm xl:text-[18px] lg:text-base 2xl:text-2xl font-Manrope font-semibold'>{t(linkTxt)}</Link>
            </div>
            <div className='grid md:grid-cols-3 gap-5 max-lg:hidden  justify-between h-full w-full'>
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
