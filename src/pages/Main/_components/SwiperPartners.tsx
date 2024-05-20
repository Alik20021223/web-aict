import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { partnersBlockType } from '../../Partners/_compents/types';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useResize } from '../../../hook/useWidthSize';
import { MainPartner } from './mainPartner';
import { SwiperBtn } from '../../../core/swiperBtn';

interface SwiperPartnersApp {
    data: partnersBlockType[]
}

export const SwiperPartners = ({ data }: SwiperPartnersApp) => {

    const { t } = useTranslation()

    const { width } = useResize()

    const lg = width < 1024
    const md = width < 768

    console.log(md);
    

    return (
        <div className='lg:space-y-10 max-lg:space-y-8'>
            <div className='flex justify-between'>
                <h1 className='font-bold xl:text-4xl 2xl:text-5xl lg:text-2xl md:text-xl text-foreground'>
                    {t("ourPartners")}
                </h1>
                <Link to="/partners" className='text-primary 2xl:text-2xl xl:text-[18px] lg:text-base font-semibold md:text-base'>
                    <span className="max-sm:hidden font-Manrope">{t('moreInfo')}</span>
                    <span className="max-sm:block hidden font-Manrope">{t('more')}</span>
                </Link>
            </div>
            <div>
                <Swiper
                    slidesPerView={md ? 1 : lg ? 2 : 3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    modules={[Autoplay, FreeMode,]}
                    className='space-y-5'
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MainPartner data={item} />
                        </SwiperSlide>
                    ))}
                    <div className='flex justify-center'>
                        <div>
                            <SwiperBtn />
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
