import { t } from "i18next"
import { documentBlockType } from "./types"

interface DocumentBlockApp {
    data: documentBlockType
}

const DocumentBlock: React.FC<DocumentBlockApp> = ({ data }) => {
    return (
        <div className="rounded-xl border-2 cursor-pointer bg-white">
            <div className="lg:py-6 max-lg:py-5 max-lg:px-6 md:space-y-5 lg:px-7 max-md:p-6">
                <div className="flex justify-between">
                    <p className="font-normal text-[#73787D] max-md:text-base text-sm 2xl:text-base">{t('dateStartDoc')} {data.dataStart}</p>
                    <img src='/img/DocVector.svg' alt="docs" />
                </div>
                <div className="max-md:w-2/3 max-sm:w-full ">
                    <h1 className="font-bold 2xl:text-xl max-md:text-xl text-base">{data.nameDocument}</h1>
                </div>
            </div>
        </div>
    )
}

export default DocumentBlock