import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { MainBlock_2 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_2'
import { MainBlock_3 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_3'
import { useEffect, useState } from 'react'
import api from '../../api'
import { PropsMainBlock_2 } from '../../pages/Main/_components/mainPage/mainBlock/types'

export const PresidentBlock = () => {

    const blockData_2 = useSelector((state: RootState) => state.aict.mainBlock_2)

    const [data, setData] = useState<PropsMainBlock_2 | undefined>()

    useEffect(() => {
        api.get('articles/per-page/1')
            .then((res => {
                setData(res.data.data[0])
            }))
            .catch(err => console.log(err))
    }, [])

    

    
    

    return (
        <>
            <div className='flex w-full  justify-between'>
                <div className='lg:w-[60%] md:w-full'>
                    <MainBlock_2 data={blockData_2} />
                </div>
                <div className='w-[37%] sm:hidden max-sm:hidden lg:block'>
                    {data && <MainBlock_3 data={data} />}
                </div>
            </div>
        </>
    )
}
