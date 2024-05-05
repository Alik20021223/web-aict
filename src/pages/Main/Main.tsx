import { MediaCom } from '../../widgets/MainWidgets/MediaCom'
import { ProjectsCom } from '../../widgets/MainWidgets/ProjectsCom'
import { Activity } from '../../widgets/MainWidgets/activity'
import { PresidentBlock } from '../../widgets/MainWidgets/president'
import { AictMainBlock } from '../../widgets/MainWidgets/AictMainBlock'
import { useEffect, useState } from 'react'
import { BlogBlockType } from '../Blog/_components/types'
import api from '../../api'
import { PropsPress } from './_components/mainPage/MediaBlock'

export const Main = () => {

    const [blogData, setBlogData] = useState<BlogBlockType[]>([])
    const [galleryData, setGallery] = useState<PropsPress[]>([])

    useEffect(() => {
        api.get('blog/per-page/3').then(res => {
            setBlogData(res.data.data)
        }).catch(err => {
            console.log(err);
        })
        api.get('galleries/per-page/9')
            .then(res => {
                const filteredGalleries = res.data.data.filter((gallery: PropsPress) => gallery.type !== 'video').slice(0,3);
                setGallery(filteredGalleries);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])



    return (
        <div className='w-full sm:px-5 space-y-16 mb-16 max-sm:px-5 container m-auto h-full'>
            <AictMainBlock />
            <PresidentBlock />
            <Activity />
            <MediaCom data={blogData} name='PressCenter' linkTxt='allNews' link='/blog' />
            <ProjectsCom />
            <MediaCom data={galleryData} name='Gallery' linkTxt='allMedia' link='/gallery' />
        </div>
    )
}
