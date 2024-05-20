import { useSelector } from "react-redux";

import { GaleryBlock } from "./types";
import { RootState } from "../../../state/store";
import ReactPlayer from 'react-player'

interface PhotoDescribeBlockApp {
    data: GaleryBlock,
    category: string,
}

export const PhotoDescribeBlock = ({ data, category }: PhotoDescribeBlockApp) => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang)
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const address = currentLang.code === 'ru' ? data.addressRu : currentLang.code === 'en' ? data.addressEn : data.addressTj;
    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;

    console.log(data);
    console.log(category);
    

    return (
        <>
            <div className="space-y-10 max-lg:space-y-6 text-foreground">
                <p className='font-normal max-sm:text-sm max-md:text-lg text-primary lg:text-xs xl:text-sm 2xl:text-xl md:text-xs'>{address}</p>
                <h1 className="font-bold text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-2xl">{title}</h1>
                <div className="rounded-lg overflow-hidden w-full h-[500px]">
                    {category === 'images' ? <img src={`${urlHosting}/${data.filePath}`} alt={`${data.filePath}-img`} className="object-cover w-full h-full" /> : <ReactPlayer width='100%' height='100%' url={data.url} />}
                </div>
                <div className="space-y-12 max-lg:space-y-6" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </>
    );
};
