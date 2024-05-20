import { t } from "i18next"
import { useResize } from "../../../hook/useWidthSize";

interface AboutAgencyApp {    
    data: string
}

export const HistoryAgency: React.FC<AboutAgencyApp> = ({ data }) => {

    const { width } = useResize();

    const mobileWidth = width <= 1024

    return (
        <div className="bg-white dark:bg-dark text-foreground shadow-md rounded-xl overflow-hidden">
            <div className="flex max-lg:flex-col-reverse w-full max-md:items-center max-lg:py-10 max-lg:py-10 lg:py-[110px] max-xl:px-10 xl:px-20 items-center justify-between">
                <div className="w-[50%] flex max-md:justify-center max-xl:w-[40%]  max-md:scale-90 max-sm:scale-80">
                    <div>
                        <img src={`${mobileWidth ? '/img/LogoAndMapMobile.svg' : '/img/LogoAndMap.svg'}`} alt="logoAndMap" />
                    </div>
                </div>
                <div className="pl-[110px] max-xl:py-[40px] max-lg:py-[20px] max-lg:pl-0 py-[110px] w-[50%] max-lg:w-full">
                    <h1 className="xl:text-4xl sm:text-2xl max-sm:text-2xl 2xl:text-5xl max-lg:mb-[30px] mb-[50px] font-bold lg:text-2xl">{t('historyAgencyh1')}</h1>
                    <div className="text-lg 2xl:text-2xl leading-10 font-normal dark:text-foreground text-[#53585E]" dangerouslySetInnerHTML={{__html: data}}></div>
                </div>
            </div>
        </div>
    )
}
