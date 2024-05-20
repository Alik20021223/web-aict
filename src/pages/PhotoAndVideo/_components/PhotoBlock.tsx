import { useSelector } from "react-redux"
import { GaleryBlock } from "./types"
import { RootState } from "../../../state/store"
import { Link } from "react-router-dom"

interface PhotoBlockApp {
    data: GaleryBlock
}

export const PhotoBlock = ({ data }: PhotoBlockApp) => {

    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    
    

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const address = currentLang.code === 'ru' ? data.addressRu : currentLang.code === 'en' ? data.addressEn : data.addressTj;

    return (
        <Link to={`/gallery/${data.category}/${data.slug}`}>
            <div className='flex-col flex h-full'>
                <div className='rounded-t-md shadow-md flex justify-center items-center overflow-hidden h-[350px]'>
                    <img src={`${urlHosting}/${data.filePath}`} className='w-full object-cover max-w-full h-full' alt={`${title}-img`} />
                </div>
                <div style={{height: `calc(100% - 350px)`}} className='xl:p-[25px] md:p-[15px] max-md:p-6 2xl:p-[30px] lg:p-[15px] space-y-7 flex flex-col bg-white text-textBlackAict shadow-md rounded-b-[10px]'>
                    <div className="space-y-2.5">
                        <h1 className={`font-bold 2xl:text-4xl max-sm:text-lg text-wrap  xl:text-2xl max-md:text-2xl lg:text-xl md:text-base`}>
                            {title}
                        </h1>
                        <p className='font-normal max-sm:text-sm max-md:text-lg text-primary lg:text-xs xl:text-sm 2xl:text-xl md:text-xs'>{address}</p>
                    </div>
                    <p className='max-sm:text-sm 2xl:text-xl max-md:text-lg mt-5 font-normal xl:text-base lg:text-sm md:text-xs opacity-70 text-[#2E363E]'>{formatDate(data.created_at)}</p>
                </div>
            </div>
        </Link>
    )
}
