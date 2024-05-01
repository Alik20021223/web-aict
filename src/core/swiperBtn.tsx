import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"

export const SwiperBtn = () => {
    const swiper = useSwiper();
    const [isNextDisabled, setNextDisabled] = useState<boolean>(false)
    const [isPrevDisabled, setPrevDisabled] = useState<boolean>(true)

    useEffect(() => {
        const updateButtons = () => {
            setPrevDisabled(swiper.isBeginning);
            setNextDisabled(swiper.isEnd);
        };

        updateButtons();

        
        swiper.on('slideChange', updateButtons);

    
        return () => {
            swiper.off('slideChange', updateButtons);
        };
    }, [swiper])

    const handlePrevClick = () => {
        swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiper.slideNext();
    };

    return (
        <div>
            <div className=''>
                <Button disabled={isPrevDisabled} onClick={handlePrevClick} className={`slidePrev !p-2 2xl:!p-4 !mr-4 ${isPrevDisabled ? '!bg-green-300' : '!bg-primary'} !min-w-0 !rounded-full`}>
                    <ExpandMore className='rotate-90 2xl:scale-125 !fill-white' />
                </Button>
                <Button disabled={isNextDisabled} onClick={handleNextClick} className={`slideNext !p-2 2xl:!p-4 ${isNextDisabled ? '!bg-green-300' : '!bg-primary'} !min-w-0 !rounded-full`}>
                    <ExpandLess className="rotate-90 2xl:scale-125 !fill-white" />
                </Button>
            </div>
        </div>
    )
}
