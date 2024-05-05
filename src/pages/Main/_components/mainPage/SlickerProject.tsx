import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { PressBlock, PropsPress} from './MediaBlock';
import { Autoplay } from 'swiper/modules';

interface PropsSlider {
    data: PropsPress[]
}

export const ProjectSlider = ({ data }: PropsSlider) => {

    return (
        <Swiper

            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}

        >
            {data.map((item) => (
                <SwiperSlide key={item.imagePath || item.filePath}>
                    <PressBlock data={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};
