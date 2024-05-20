import React from 'react'
import { PropsMainApp } from '../types'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Button } from '@mui/material'
import 'swiper/css';
import { BlockTxt } from './BlockTxt';
import { ImageSlider } from './ImageBlock';
import { ButtonCom } from '../../../../../core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const MainBlock_1: React.FC<PropsMainApp> = ({ data }) => {

    const { t } = useTranslation();

    const [isIndex, setIndex] = React.useState<number>(0);

    const handleNextClick = () => {
        const newIndex = isIndex + 1;
        setIndex(newIndex >= data.length ? 0 : newIndex);

    };

    const handlePrevClick = () => {
        const newIndex = isIndex - 1;
        setIndex(newIndex < 0 ? data.length - 1 : newIndex);
    };



    return (
        <div className='bg-white dark:bg-dark shadow-md w-full rounded-2xl'>
            <div className='p-[25px] flex max-md:flex-col-reverse  justify-between'>
                <div className='flex w-[45%] max-md:w-full max-md:mt-8 max-sm:mt-4 flex-col justify-between h-full'>
                    <BlockTxt data={data} currentPoint={isIndex} />
                    <div className='flex max-md:hidden items-center  justify-between'>
                        <Link to={`/events/`} className='font-semibold  2xl:text-2xl text-base text-primary'>{t('more')}
                            <ExpandLess className="rotate-90 !fill-primary" />
                        </Link>
                        <div className=''>
                            <Button onClick={handlePrevClick} className='!p-2 2xl:!p-4 !mr-4 !bg-[#F7F8F9] dark:!bg-darkBg !min-w-0 !rounded-full'>
                                <ExpandMore className='rotate-90 2xl:scale-125 !fill-primary' />
                            </Button>
                            <Button onClick={handleNextClick} className='!p-2 2xl:!p-4 !bg-[#F7F8F9] dark:!bg-darkBg !min-w-0 !rounded-full'>
                                <ExpandLess className="rotate-90 2xl:scale-125 !fill-primary" />
                            </Button>
                        </div>
                    </div>
                    <div className='hidden max-md:block'>
                        <Link to={`/events/`}>
                            <ButtonCom>{t("more")}</ButtonCom >
                        </Link>
                    </div>
                </div>
                <ImageSlider data={data} currentPoint={isIndex} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
            </div>
        </div >
    )
}
