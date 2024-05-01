import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { MainBlock_2 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_2'
import { MainBlock_3 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_3'

export const PresidentBlock = () => {

    const blockData_2 = useSelector((state: RootState) => state.aict.mainBlock_2)
    const blockData_3 = useSelector((state: RootState) => state.aict.mainBlock_3)

    return (
        <div className='flex w-full  justify-between'>
            <div className='lg:w-[60%] md:w-full'>
                <MainBlock_2 data={blockData_2} />
            </div>
            <div className='w-[37%] sm:hidden max-sm:hidden lg:block'>
                <MainBlock_3 data={blockData_3} />
            </div>
        </div>
    )
}
