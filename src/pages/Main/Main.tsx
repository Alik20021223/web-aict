import { MediaCom } from '../../widgets/MainWidgets/MediaCom'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { ProjectsCom } from '../../widgets/MainWidgets/ProjectsCom'
import { Activity } from '../../widgets/MainWidgets/activity'
import { PresidentBlock } from '../../widgets/MainWidgets/president'
import { AictMainBlock } from '../../widgets/MainWidgets/AictMainBlock'

export const Main = () => {

    const MediaData = useSelector((state: RootState) => state.aict.MediaData)
    const PressData = useSelector((state: RootState) => state.aict.PressData)

    return (
        <div className='w-full sm:px-5 max-sm:px-5 container m-auto'>
            <AictMainBlock />
            <PresidentBlock />
            <Activity />
            <MediaCom data={PressData} name='PressCenter' linkTxt='allNews' link='#' />
            <ProjectsCom />
            <MediaCom data={MediaData} name='PhotoVideo' linkTxt='allMedia' link='#' />
        </div>
    )
}
