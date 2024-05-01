import { useTranslation } from "react-i18next"


export const PartnersBlock = ({ data }) => {

    const { t } = useTranslation()

    return (
        <div className="bg-white rounded-xl border">
            <div className="p-6">
                <div className="border rounded-lg h-[245px]">
                    <img src={data.imagePath} alt={`${data.title}-img`} className="w-full h-full max-w-full" />
                </div>
                <div className="space-y-10 mt-6">
                    <div className="space-y-5">
                        <h1 className="font-semibold text-3xl max-md:text-2xl">{data.title}</h1>
                        <p className="font-semibold text-xl max-md:text-lg">{data.describe}</p>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <h3 className="text-xl max-md:text-base">{t('siteH3')}</h3>
                            <a href={data.site} className="text-lg max-md:text-xl text-primary">{data.site}</a>
                        </div>
                        <div>
                            <h3 className="text-xl max-md:text-base">{t('phoneH3')}</h3>
                            <a href={`tel:${data.phone}`} className="text-lg max-md:text-xl">{data.phone}</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
