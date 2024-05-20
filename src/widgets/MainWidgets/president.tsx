import { useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { MainBlock_2 } from '../../pages/Main/_components/mainBlock/mainBlock_2'
import { MainBlock_3 } from '../../pages/Main/_components/mainBlock/mainBlock_3'
import React from 'react'
import { PropsApp } from '../../pages/Main/_components/mainBlock/types'

export const PresidentBlock: React.FC<PropsApp> = ({ data }) => {

    const blockData_2 = useSelector((state: RootState) => state.aict.mainBlock_2)
    const mainBlockData = data[0]


    return (
        <>
            <div className='flex w-full  justify-between'>
                <div className='lg:w-[60%] md:w-full'>
                    <MainBlock_2 data={blockData_2} />
                </div>
                <div className='w-[37%] sm:hidden max-sm:hidden lg:block'>
                    <MainBlock_3 data={mainBlockData} />
                </div>
            </div>
        </>
    )
}
