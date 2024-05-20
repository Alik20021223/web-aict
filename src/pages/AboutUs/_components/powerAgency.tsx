import { t } from "i18next"

interface ArrayPowerAgency {
    data: string
}

export const PowerAgency: React.FC<ArrayPowerAgency> = ({ data }) => {
    return (
        <div className="bg-white dark:bg-dark shadow-md rounded-xl">
            <div className="w-full max-lg:p-10 lg:py-[110px] lg:pl-[110px] lg:pr-[210px] relative">
                <h1 className="xl:text-4xl 2xl:text-5xl mb-[50px] max-lg:mb-[30px] font-bold max-sm:text-2xl sm:text-2xl">{t('powerAgencyH1')}</h1>
                <div className="text-lg 2xl:text-2xl leading-10 font-normal dark:text-foreground text-[#53585E]" dangerouslySetInnerHTML={{ __html: data }}></div>
                <div className="absolute max-lg:hidden top-0 right-0">
                    <img src="/img/LogoShield.svg" alt="logoShield" />
                </div>
            </div>
        </div>
    )
}
