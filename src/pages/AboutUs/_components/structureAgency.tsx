import { t } from "i18next"
import React from "react"

interface AboutAgencyApp {
    structureCenter: string;
    structureOrganize: string;
}

export const StructureAgency: React.FC<AboutAgencyApp> = ({ structureCenter, structureOrganize }) => {
    return (
        <div className="bg-white rounded-xl shadow-md">
            <div className="p-[110px] max-lg:p-10 space-y-[50px]">
                <h1 className="xl:text-4xl 2xl:text-5xl mb-[50px] font-bold max-sm:text-2xl sm:text-2xl">{t('structAgency')}</h1>
                <div className="space-y-[50px] border-b-2 pb-10">
                    <h2 className="xl:text-3xl 2xl:text-4xl lg:mb-[50px] max-sm:mb-5 sm:mb-8 font-medium max-sm:text-xl sm:text-xl">1. {t('structCentr')}</h2>
                    <p dangerouslySetInnerHTML={{ __html: structureCenter }} className="text-[#53585E] max-sm:text-base sm:text-base  text-xl max-lg:text-lg leading-10"></p>
                </div>
                <div className="">
                    <h2 className="xl:text-3xl 2xl:text-4xl lg:mb-[50px] max-sm:mb-5 sm:mb-8 font-medium max-sm:text-xl sm:text-xl">2. {t('structOrganize')}</h2>
                    <p className="text-[#53585E] text-xl max-lg:text-lg max-sm:text-base sm:text-base leading-10" dangerouslySetInnerHTML={{ __html: structureOrganize }}></p>
                </div>
            </div>
        </div>
    )
}
