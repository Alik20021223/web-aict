import { MediaCom } from '../../widgets/MainWidgets/MediaCom'
import { ProjectsCom } from '../../widgets/MainWidgets/ProjectsCom'
import { Activity } from '../../widgets/MainWidgets/activity'
import { PresidentBlock } from '../../widgets/MainWidgets/president'
import { useEffect, useState } from 'react'
import { BlogBlockType } from '../Blog/_components/types'
import api from '../../api'
import { PropsPress } from './_components/mainPage/MediaBlock'
import { MainBlock_1 } from './_components/mainPage/mainBlock/mainBlock_1/mainBlock_1'
import { SwiperTxt } from './_components/mainPage/mainBlock/mainBlock_1/types'
import { PropsMainBlock_2 } from './_components/mainPage/mainBlock/types'
import { activity } from './_components/mainPage/VerticalSlider/types'
import { PropsProject } from './_components/mainPage/projectBlock'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadingPage } from '../../state/defState/defSlice'
import { RootState } from '../../state/store'

export const Main = () => {

    const [blogData, setBlogData] = useState<BlogBlockType[]>([])
    const [galleryData, setGallery] = useState<PropsPress[]>([])
    const [dataMain, setDataMain] = useState<SwiperTxt[]>([])
    const [dataArticle, setArticle] = useState<PropsMainBlock_2[]>([])
    const [dataActivity, setDataActivity] = useState<activity[]>([])
    const [dataProject, setDataProject] = useState<PropsProject[]>([])
    const useLoading = useSelector((state: RootState) => state.aict.loadingPage)

    const dispatch = useDispatch()


    useEffect(() => {
        const fetchData = async () => {
            try {
                // dispatch(handleLoadingPage(true));
                console.log('lox tu', new Date());

                // Имитация запросов с задержкой 1 секунда
                // await new Promise(resolve => setTimeout(resolve, 1000));

                
                const blogRes = await api.get('blog/per-page/3');
                const galleriesRes = await api.get('galleries/per-page/9');
                const eventsRes = await api.get('events/per-page/3');
                const articlesRes = await api.get('articles/per-page/1');
                const activitiesRes = await api.get('activities');
                const projectsRes = await api.get('projects/per-page/3');

                
                setBlogData(blogRes.data.data);
                const filteredGalleries = galleriesRes.data.data.filter((gallery: PropsPress) => gallery.type !== 'video').slice(0, 3);
                setGallery(filteredGalleries);
                setDataMain(eventsRes.data.data);
                setArticle(articlesRes.data.data);
                setDataActivity(activitiesRes.data.data.slice(0, 5));
                setDataProject(projectsRes.data.data);
            } catch (err) {
                console.log(err);
            } finally {
                // dispatch(handleLoadingPage(false));
                console.log('LOX NE', new Date());
            }
        };

        fetchData();
    }, []);







    return (
        <div className='w-full sm:px-5 space-y-16 mb-16 max-sm:px-5 container m-auto h-full'>
            {dataMain.length > 0 && <MainBlock_1 data={dataMain} />}
            {/* <PresidentBlock data={dataArticle} /> */}
            {dataActivity.length > 0 && <Activity data={dataActivity} />}
            {blogData.length > 0 && <MediaCom data={blogData} name='PressCenter' linkTxt='allNews' link='/blog' />}
            {dataProject.length > 0 && <ProjectsCom data={dataProject} />}
            {galleryData.length > 0 && <MediaCom data={galleryData} name='Gallery' linkTxt='allMedia' link='/gallery' />}
        </div>
    )
}
