import { t } from "i18next";
import { documentBlockType } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

interface DocumentBlockApp {
    data: documentBlockType;
}

const DocumentBlock: React.FC<DocumentBlockApp> = ({ data }) => {
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting);

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const filePath = currentLang.code === 'ru' ? data.filePathRu : currentLang.code === 'en' ? data.filePathEn : data.filePathTj;
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };


    const handleDowland = () => {
        const aTag = document.createElement('a')
        aTag.href = `${urlHosting}/${filePath}`
        aTag.setAttribute("dowland", title),
        aTag.click();
        aTag.remove();
    }



    return (
        <div className="rounded-xl border-2 cursor-pointer bg-white" onClick={handleDowland}>
            <div className="lg:py-6 max-lg:py-5 max-lg:px-6 md:space-y-5 lg:px-7 max-md:p-6">
                <div className="flex justify-between">
                    <p className="font-normal text-[#73787D] max-md:text-base text-sm 2xl:text-base">{t('dateStartDoc')} {formatDate(data.activeFrom)}</p>
                    <img src='/img/DocVector.svg' alt="docs" />
                </div>
                <div className="max-md:w-2/3 max-sm:w-full ">
                    <h1 className="font-bold 2xl:text-xl max-md:text-xl text-base">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default DocumentBlock;
