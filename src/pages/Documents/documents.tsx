import { SearchInput } from "../../core/searchInput"
import { DocLaw } from "./_components/docLaw"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { DecreesDoc } from "./_components/DecreesDoc"
import { useTranslation } from "react-i18next"
import { RegulationsDoc } from "./_components/RegulationsDoc"





export const Documents = () => {
    const { t } = useTranslation();
    const DocsPage = useSelector((state: RootState) => state.aict.DocsPage);


    

return (
    <div className="container m-auto space-y-[50px] sm:px-5 max-sm:px-5">
        <h1 className="font-bold text-4xl">{t('Documents')}</h1>
        <div className="w-full">
            <SearchInput txt="searchDocuments" />
        </div>
        <div className="space-y-[88px]">
            <DocLaw data={DocsPage.DocsLawsBlock} />
            <DecreesDoc data={DocsPage.DecreesBlock} />
            <RegulationsDoc data={DocsPage.RegulationsBlock} />
        </div>
    </div>
)
}
