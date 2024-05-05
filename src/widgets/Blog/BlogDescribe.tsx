import { Link, NavLink, useParams } from "react-router-dom"
import { DescribeBlock } from "../DescribeBlock"
import { useEffect, useState } from "react"
import api from "../../api"
import { useTranslation } from "react-i18next";

interface BlogDescribeApp {
    id: number;
    category: string,
    slug: string;
    titleTj: string;
    titleRu: string;
    titleEn: string;
    descriptionTj: string;
    descriptionRu: string;
    descriptionEn: string;
    imagePath: string;
    time: string;
    created_at: string;
    updated_at: string;
}

const initialData: BlogDescribeApp = {
    id: 0,
    category: '',
    slug: '',
    titleTj: '',
    titleRu: '',
    titleEn: '',
    descriptionTj: '',
    descriptionRu: '',
    descriptionEn: '',
    imagePath: '',
    time: '0000-00-00 00:00:00',
    created_at: '2024-05-01T06:58:19.000000Z',
    updated_at: '2024-05-01T06:58:19.000000Z',
};



export const BlogDescribe = () => {

    const [data, setData] = useState<BlogDescribeApp>(
        initialData
    );

    const { t } = useTranslation()

    const { category, slug } = useParams();
    console.log(category);

    useEffect(() => {
        api.get(`${category}/get/${slug}`).then(res => {

            setData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [category, slug])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0'); // Добавляем ведущий ноль, если число меньше 10
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };


    return (
        <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="bg-white rounded-xl shadow-md">
                <div className='xl:px-28  xl:py-12 max-xl:px-12 max-xl:py-6 max-lg:px-8 max-lg:py-4 max-md:px-5 max-md:py-5'>
                    <div className="flex space-x-1 mb-5 text-foreground">
                        <Link to='/blog'>{t('BlogH1')}</Link>
                        <span>-</span>
                        <NavLink to={`/blog?filter=${category}&page=1`}>{t('newsFilter')}</NavLink>
                        <span>-</span>
                        <p>{formatDate(data.created_at)}</p>
                    </div>
                    <DescribeBlock data={data} />
                </div>
            </div>
        </div>
    );

}
