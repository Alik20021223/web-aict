import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { BlogBlockType } from './types';

interface blogBlockApp {
    data: BlogBlockType
}

export const BlogBlock: React.FC<blogBlockApp> = ({ data }) => {
    const { created_at } = data;

    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)

    
    


    // Функция для форматирования даты в нужный формат
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0'); // Добавляем ведущий ноль, если число меньше 10
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const title = currentLang.code === 'ru' ? data.titleRu : currentLang.code === 'en' ? data.titleEn : data.titleTj;
    const description = currentLang.code === 'ru' ? data.descriptionRu : currentLang.code === 'en' ? data.descriptionEn : data.descriptionTj;


    return (
        <Link to={`${data.category}/${data.slug}`}>
            <div className="bg-white rounded-xl shadow-md border-1 border-[#D3D8E3] h-full">
                <div className="p-5 h-full">
                    <div className="flex space-y-4 flex-col">
                        <div className="rounded-lg overflow-hidden w-full h-[200px]">
                            <img src={`${urlHosting}/${data.imagePath}`} alt={`${title}-img`} className='object-cover w-full h-full max-w-full' />
                        </div>
                        <p className="font-normal text-sm">{formatDate(created_at)}</p>
                        <h1 className="font-semibold text-base">{title}</h1>
                        <div className="font-normal text-sm overflow-hidden whitespace-normal line-clamp-3" dangerouslySetInnerHTML={{__html: description}}></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
