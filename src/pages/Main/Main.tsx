import { MediaCom } from '../../widgets/MainWidgets/MediaCom'
import { ProjectsCom } from '../../widgets/MainWidgets/ProjectsCom'
import { Activity } from '../../widgets/MainWidgets/activity'
import { PresidentBlock } from '../../widgets/MainWidgets/president'
import { useEffect, useState } from 'react'
import { BlogBlockType } from '../Blog/_components/types'
import { PropsPress } from './_components/MediaBlock'
import { MainBlock_1 } from './_components/mainBlock/mainBlock_1/mainBlock_1'
import { SwiperTxt } from './_components/mainBlock/mainBlock_1/types'
import { PropsMainBlock_2 } from './_components/mainBlock/types'
import { activity } from './_components/VerticalSlider/types'
import { PropsProject } from './_components/projectBlock'
import { useMain } from './api/useMain'
import { SwiperPartners } from './_components/SwiperPartners'
import { partnersBlockType } from '../Partners/_compents/types'

export const Main = () => {
    const [blogData, setBlogData] = useState<BlogBlockType[]>([]);
    const [galleryData, setGalleryData] = useState<PropsPress[]>([]);
    const [dataMain, setDataMain] = useState<SwiperTxt[]>([]);
    const [dataArticle, setDataArticle] = useState<PropsMainBlock_2[]>([]);
    const [dataActivity, setDataActivity] = useState<activity[]>([]);
    const [dataProject, setDataProject] = useState<PropsProject[]>([]);
    const [dataPartners, setDataPartners] = useState<partnersBlockType[]>([]);


    const { data: blogDataFromApi } = useMain('blog/per-page/3');
    const { data: galleryDataFromApi } = useMain('images/per-page/3');
    const { data: eventData } = useMain('events/per-page/3');
    const { data: activityData } = useMain('activities');
    const { data: articleData } = useMain('articles/per-page/1');
    const { data: projectData } = useMain('projects/per-page/3');
    const { data: partnersData } = useMain('partners/per-page/9');

    useEffect(() => {
        setBlogData(blogDataFromApi);
        setGalleryData(galleryDataFromApi);
        setDataMain(eventData);
        setDataArticle(articleData);
        const slicedActivityData = activityData.slice(0, 5);
        setDataActivity(slicedActivityData);
        setDataProject(projectData);
        setDataPartners(partnersData)
    }, []);

    useEffect(() => {
        setBlogData(blogDataFromApi);
        setGalleryData(galleryDataFromApi);
        setDataMain(eventData);
        setDataArticle(articleData);
        const slicedActivityData = activityData.slice(0, 5);
        setDataActivity(slicedActivityData);
        setDataProject(projectData);
        setDataPartners(partnersData)
    }, [blogDataFromApi, galleryDataFromApi, eventData, activityData, articleData, projectData, partnersData]);



    return (
        <div className='w-full sm:px-5 space-y-16 mb-16 max-sm:px-5 container m-auto h-full'>
            <MainBlock_1 data={dataMain} />
            {dataArticle.length > 0 && <PresidentBlock data={dataArticle} />}
            <Activity data={dataActivity} />
            <MediaCom data={blogData} name='PressCenter' linkTxt='allNews' link='/blog' />
            <ProjectsCom data={dataProject} />
            <MediaCom data={galleryData} name='Gallery' linkTxt='allMedia' link='/gallery' />
            <SwiperPartners data={dataPartners} />
        </div>
    );
};

