import { t } from "i18next"

interface AboutAgencyApp {
    data: string
}

export const PositionAgency: React.FC<AboutAgencyApp> = ({ data }) => {
    return (
        <div className="bg-white dark:bg-dark shadow-md rounded-xl">
            <div className="lg:py-[110px] lg:pl-[110px] lg:pr-[70px] max-lg:p-10  w-full">
                <h1 className="xl:text-4xl text-2xl 2xl:text-5xl mb-[50px] font-bold  lg:text-2xl">{t('positionAgencyH1')}</h1>
                <div className="text-lg 2xl:text-2xl leading-10 font-normal dark:text-foreground text-[#53585E]" dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
        </div>
    )
}
