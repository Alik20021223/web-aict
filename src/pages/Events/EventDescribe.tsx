import { Link, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../api"
import { useTranslation } from "react-i18next";
import { DescribeBlock } from "../../widgets/DescribeBlock";

interface EventDescribeApp {
  id: number;
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

const initialData: EventDescribeApp = {
  id: 0,
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
  updated_at: '0000-00-00 00:00:00',
};



export const EventDescribe = () => {

    const [data, setData] = useState<EventDescribeApp>(
        initialData
    );

    const { t } = useTranslation()

    const { time, slug } = useParams();
    console.log(time, slug);

    useEffect(() => {
        api.get(`events/get/${slug}`).then(res => {

            setData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [time, slug])

    console.log(data);
    

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
                    <div className="flex space-x-1 mb-5  text-foreground">
                        <Link to='/events'>{t('events')}</Link>
                        <span>-</span>
                        <NavLink to={`/events?filter=${time}&page=1`}>{time}</NavLink>
                        <span>-</span>
                        <p>{formatDate(data.created_at)}</p>
                    </div>
                    <DescribeBlock data={data} />
                </div>
            </div>
        </div>
    );

}

