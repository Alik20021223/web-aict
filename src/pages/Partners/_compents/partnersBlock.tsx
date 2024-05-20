import { useTranslation } from "react-i18next"
import { partnersBlockType } from "./types"
import { RootState } from "../../../state/store"
import { useSelector } from "react-redux"

interface PartnersBlockApp {
    data: partnersBlockType,
    
}


export const PartnersBlock = ({ data }: PartnersBlockApp) => {
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    // const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;
    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;

    const { t } = useTranslation()

    return (
        <div className="bg-white rounded-xl border lg:shadow-md h-full">
            <div className="p-6 h-full">
                <div className="border rounded-lg h-[225px]">
                    <img src={`${urlHosting}/${data.imagePath}`} alt={`${title}-img`} className="w-full object-fit rounded-lg h-full max-w-full" />
                </div>
                <div className="space-y-10 mt-6">
                    <div className="space-y-5">
                        <h1 className="font-semibold text-2xl max-md:text-xl">{title}</h1>
                        {/* <div className="font-normal text-lg max-md:text-base" dangerouslySetInnerHTML={{__html: description}}></div> */}
                    </div>
                    <div className="space-y-5">
                        <div>
                            <h3 className="text-lg text-foreground max-md:text-base opacity-25 font-light">{t('siteH3')}</h3>
                            <a href={data.site} className="text-lg max-md:text-xl text-primary">{data.site}</a>
                        </div>
                        <div>
                            <h3 className="text-lg text-foreground max-md:text-base opacity-25 font-light">{t('phoneH3')}</h3>
                            <a href={`tel:${data.phone}`} className="text-lg max-md:text-xl">{data.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
