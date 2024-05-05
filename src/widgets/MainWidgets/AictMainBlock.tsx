import { MainBlock_1 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_1/mainBlock_1';
import { useEffect, useState } from 'react';
import { SwiperTxt } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_1/types';
import api from '../../api';

export const AictMainBlock = () => {

    const [data, setData] = useState<SwiperTxt[]>([])

    useEffect(() => {
        api.get('events/per-page/3').then(res => {
            setData(res.data.data)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className=''>
            <MainBlock_1 data={data} />
        </div>
    )
}
