import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { MainBlock_1 } from '../../pages/Main/_components/mainPage/mainBlock/mainBlock_1/mainBlock_1';

export const AictMainBlock = () => {

    const mainBlockData_1 = useSelector((state: RootState) => state.aict.mainBlock_1);


    return (
        <div className='mb-8'>
            <MainBlock_1 data={mainBlockData_1} />
        </div>
    )
}
