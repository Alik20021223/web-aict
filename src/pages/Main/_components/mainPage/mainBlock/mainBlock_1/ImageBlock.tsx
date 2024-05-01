import React from 'react';
import { BlockAppTxt } from './types';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button } from '@nextui-org/react';

export const ImageSlider: React.FC<BlockAppTxt> = ({ data, currentPoint, handleNextClick, handlePrevClick }) => {
  const sliderHeight = 350;

  return (
    <div className='md:relative w-[45%] max-md:w-full overflow-hidden'>
      <div className='md:overflow-hidden relative' style={{ height: `${sliderHeight}px` }}>
        <div className='absolute z-20 w-full  md:hidden  flex h-full items-center justify-between'>
          <Button onClick={handlePrevClick} className='!p-2 2xl:!p-4 !ml-2 !bg-[#F7F8F9] !min-w-0 !rounded-full'>
            <ExpandMore className='rotate-90 2xl:scale-125 !fill-primary' />
          </Button>
          <Button onClick={handleNextClick} className='!p-2 2xl:!p-4 !mr-2 !bg-[#F7F8F9] !min-w-0 !rounded-full'>
            <ExpandLess className="rotate-90 2xl:scale-125 !fill-primary" />
          </Button>
        </div>
        <div
          className='relative flex flex-col'
          style={{
            height: `${sliderHeight * data.length}px`,
            transform: `translateY(${-currentPoint * sliderHeight}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className='w-full h-full rounded-xl'
              style={{ height: `${sliderHeight}px` }}
            >
              <img
                src={item.imgUrl.url}
                alt={item.imgUrl.alt}
                className="w-full h-full rounded-xl max-w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
