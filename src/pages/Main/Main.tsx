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
import { setLoadingPage } from '../../state/pagesSlice'
import { useMain } from './api/useMain'

export const Main = () => {

    const [blogData, setBlogData] = useState<BlogBlockType[]>([])
    const [galleryData, setGallery] = useState<PropsPress[]>([])
    const [dataMain, setDataMain] = useState<SwiperTxt[]>([])
    const [dataArticle, setArticle] = useState<PropsMainBlock_2[]>([])
    const [dataActivity, setDataActivity] = useState<activity[]>([])
    const [dataProject, setDataProject] = useState<PropsProject[]>([])
    const useLoading = useSelector((state: RootState) => state.aict.loadingPage)

    const dispatch = useDispatch()
    const { data, loading } = useMain(3)

    console.log(data, loading);

    return (
        <div className='w-full sm:px-5 space-y-16 mb-16 max-sm:px-5 container m-auto h-full'>
            {/* {dataMain.length > 0 && <MainBlock_1 data={dataMain} />} */}
            {/* <PresidentBlock data={dataArticle} /> */}
            {/* {dataActivity.length > 0 && <Activity data={dataActivity} />}
            {blogData.length > 0 && <MediaCom data={blogData} name='PressCenter' linkTxt='allNews' link='/blog' />}
            {dataProject.length > 0 && <ProjectsCom data={dataProject} />}
            {galleryData.length > 0 && <MediaCom data={galleryData} name='Gallery' linkTxt='allMedia' link='/gallery' />} */}
        </div>
    )
}
