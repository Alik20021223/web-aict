import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { BlockActivity } from "./_components/blockActivity";
import { useEffect, useState } from "react";
import api from "../../api";
import { blockActivity } from "./_components/types";


export const Activity = () => {

    const [isData, setData] = useState<blockActivity[]>([]);
    // const activityData = useSelector((state: RootState) => state.aict.ActivityPage);
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);

    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('activities');
                setData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const data = isData.length > 0 ? isData[0] : null;

    const description = data ?
        currentLang.code === 'ru' ? data.descriptionRu :
            currentLang.code === 'en' ? data.descriptionEn :
                data.descriptionTj : "";


    return (
        <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="bg-white dark:bg-dark mb-[88px] w-full shadow-md rounded-xl">
                <div className="flex items-start max-md:flex-col w-full h-full justify-between">
                    <div className="max-lg:p-14 xl:p-[110px] h-full max-md:w-full w-[60%] lg:p-20 xl:space-y-12 max-xl:space-y-8">
                        <h1 className="font-bold max-sm:text-2xl max-xl:text-3xl 2xl:text-5xl xl:text-4xl">{t('ourActivityH1')}</h1>
                        <p className="font-normal max-sm:text-base 2xl:text-2xl lg:text-xl  max-lg:text-base text-[#53585E]">{description}</p>
                    </div>
                    <div className="w-[40%] max-md:w-full py-14 max-md:py-8 max-md:pr-0 pr-16 flex justify-center">
                        <img src="/img/activityMain.svg" alt="activityMain" className="max-w-full h-auto max-md:max-w-[50%]" />
                    </div>
                </div>
            </div>
            <div className='space-y-[88px]'>
                {isData.map((item) => (
                    <div key={item.id}>
                        <BlockActivity data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
