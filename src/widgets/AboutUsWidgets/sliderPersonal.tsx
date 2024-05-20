import { personalAgency } from "../../pages/AboutUs/_components/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react"
import { PersonalBlockAbout } from "./personalBlockAbout"
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { t } from "i18next";
import { SwiperBtn } from "../../core/swiperBtn";
import { useResize } from "../../hook/useWidthSize";

interface SliderPersonalApp {
    data: personalAgency[]
}

export const SliderPersonal: React.FC<SliderPersonalApp> = ({ data }) => {   

    const { width } = useResize()

    const mobileWidth = width <= 1024



    return (
        <div>
            <h1 className="xl:text-4xl md:hidden 2xl:text-5xl mb-[50px] font-bold max-sm:text-2xl sm:text-2xl">{t('Management')}</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={mobileWidth ? 1 : 2}
                modules={[Autoplay]}
                className="!flex md:flex-col-reverse max-md:flex-col"
            >
                <div className=" md:hidden flex mt-5 justify-center">
                    <SwiperBtn />
                </div>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <PersonalBlockAbout data={item} />
                    </SwiperSlide>
                ))}

                <div className="pr-[90px] max-md:hidden flex justify-between">
                    <h1 className="xl:text-4xl 2xl:text-5xl mb-[50px] font-bold sm:text-2xl">{t('Management')}</h1>
                    <div>
                        <SwiperBtn />
                    </div>
                </div>

            </Swiper>
        </div>
    )
}
