import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { GaleryBlock } from "./_components/types"
import { PhotoDescribeBlock } from "./_components/PhotoDescribeBlock"
import { useEffect, useState } from "react"
import api from "../../api"
import { useDispatch } from "react-redux"
import { setLoadingPage } from "../../state/pagesSlice"



export const PhotoDescribe = () => {

    const [data, setData] = useState<GaleryBlock>({
        id: 0,
        titleTj: '',
        titleRu: '',
        titleEn: '',
        addressTj: '',
        addressRu: '',
        addressEn: '',
        descriptionTj: '',
        descriptionRu: '',
        descriptionEn: '',
        slug: '',
        type: '',
        filePath: '',
        created_at: '',
        updated_at: '',
        category: '',
        url: '',
    });

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { slug, category } = useParams();

    useEffect(() => {
        dispatch(setLoadingPage(true))
        api.get(`${category}/get/${slug}`).then((res) => {
            setData(res.data)
        }).catch().finally(() => {
            dispatch(setLoadingPage(false))
        })
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0'); // Добавляем ведущий ноль, если число меньше 10
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };
    
    

    return (
        data && <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="bg-white shadow-md rounded-xl">
                <div className='xl:px-28  xl:py-12 max-xl:px-12 max-xl:py-6 max-lg:px-8 max-lg:py-4 max-md:px-5 max-md:py-5'>
                    <div className="flex space-x-1 mb-5  text-foreground">
                        <Link to='/gallery'>{t('Gallery')}</Link>
                        <span>-</span>
                        <Link to={`gallery?filter=${category}&page=1`}>{t(category ? category : 'filter')}</Link>
                        <span>-</span>
                        <p>{formatDate(data.created_at)}</p>
                    </div>
                    <PhotoDescribeBlock data={data} category={category ? category : 'images'} />
                </div>
            </div>
        </div>
    )
}
