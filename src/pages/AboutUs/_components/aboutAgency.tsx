import { t } from "i18next"
import { useResize } from "../../../hook/useWidthSize"

interface AboutAgencyApp {
    data: string
    
}

export const AboutAgency: React.FC<AboutAgencyApp> = ({ data }) => {

    const { width } = useResize();

    const mobileWidth = width <= 1024


    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="flex max-lg:pt-10 max-md:pt-5  max-lg:flex-col w-full max-xl:items-center justify-between">
                <div className="xl:pl-[110px] max-xl:px-10 max-md:px-[25px]  xl:py-[110px] max-lg:w-full xl:w-[50%]">
                    <h1 className="xl:text-4xl 2xl:text-5xl max-lg:mb-10 mb-12 font-bold text-2xl">{t('aboutUsh1')}</h1>
                    <p className="text-lg 2xl:text-2xl leading-10 font-normal text-[#53585E]">{data}</p>
                </div>
                <div className="w-[50%] max-lg:w-full relative">
                    <div className="z-10 relative max-lg:flex max-lg:justify-end max-lg:right-[140px] lg:right-[120px]  max-xl:bottom-0 2xl:left-[170px] xl:left-[70px]">
                        <img src={`${mobileWidth ? '/img/manMobile.svg' : '/img/manAgency.svg'}`} alt="man" />
                    </div>
                    <div className="absolute z-0 bottom-0 max-lg:hidden right-0 max-lg:right-[-20px] max-lg: max-xl:left-[30px]  max-xl:bottom-[-20px] max-xl:scale-90">
                        <img src="/img/logoAboutAgency.svg" alt="logoAgency" />
                    </div>
                    <div className="absolute z-0 bottom-0 hidden max-lg:block right-0 max-sm:scale-90 max-sm:right-[-18px] max-sm:bottom-[-20px]">
                        <img src='/img/logoMobileAgency.svg' alt="logoAgency" />
                    </div>
                </div>
            </div>
        </div>
    )
}
