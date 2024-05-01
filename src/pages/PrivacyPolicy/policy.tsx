import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";


export const Policy = () => {

    const { t } = useTranslation();

    const data = useSelector((state: RootState) => state.aict.PrivacyPolicyData)

    return (
        <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className='p-20 max-lg:p-10 bg-white shadow-md rounded-xl'>
                <h1 className="text-4xl 2xl:text-6xl max-lg:text-2xl font-bold">{t("privacyPolicyH1")}</h1>
                <div className='mt-12 2xl:mt-16 max-lg:mt-8 space-y-7 2xl:space-y-10'>
                    {data.map((item) => (
                        <div className="space-y-7 2xl:space-y-10" key={item.id}>
                            <h1 className="font-semibold text-2xl max-lg:text-xl 2xl:text-3xl">{item.id}.  {item.name}</h1>
                            <p className="font-normal text-lg 2xl:text-xl max-lg:text-base text-[#53585E]">{item.describe}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
