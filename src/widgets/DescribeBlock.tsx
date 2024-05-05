import { useSelector } from "react-redux";
import { EventBlockType } from "../pages/Events/_components/types";
import { RootState } from "../state/store";

interface EventsBlockApp {
    data: EventBlockType
}

export const DescribeBlock = ({ data }: EventsBlockApp) => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang)
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;

    return (
        <>
            <div className="space-y-10 max-lg:space-y-6 text-foreground">
                <h1 className="font-bold text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-2xl">{title}</h1>
                <div className="rounded-lg overflow-hidden w-full h-full">
                    <img src={`${urlHosting}/${data.imagePath}`} alt={`${data.imagePath}-img`} className="object-cover w-full h-full" />
                </div>
                <div className="space-y-10 max-lg:space-y-6 blockDescribe " dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </>
    );
};
