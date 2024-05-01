import { FC } from "react"
import { TVerticalSliderProps } from "./types"
import { ButtonCom } from "../../../../../core/Button"
import { useResize } from "../../../../../hook/useWidthSize"




export const VerticalSlider: FC<TVerticalSliderProps> = ({ currentPoint, sliders }) => {

  const { width } = useResize();
  const is2xl = width >= 1536;

  return (
    <div className='overflow-hidden sm:hidden max-sm:hidden lg:block  max-sm:hidden'>
      <div
        style={{ transform: `translateY(${is2xl ? (currentPoint * -523) : (currentPoint * -424)}px)` }}
        className="transition-all !duration-500 min-h-full flex flex-col gap-6"
      >
        {sliders.map((slide, i) => (
          <div className="h-[400px] 2xl:h-[500px] bg-white rounded-xl p-[25px]" key={i}>
            <div className="h-full flex flex-1 flex-col justify-center items-center">
              <div className="flex flex-col flex-1">
                <h1 className="font-bold 2xl:text-4xl xl:text-2xl lg:text-xl lg:mb-3 mb-5 2xl:mb-8">{slide.title}</h1>
                <p className="font-medium 2xl:text-2xl text-[#7B8B8D]">{slide.content}</p>
              </div>
              <div className="self-baseline">
                <ButtonCom onClick={slide.action}>Подробнее о направлении</ButtonCom>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
