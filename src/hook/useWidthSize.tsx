import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
}

export const useResize = (): WindowSize => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent): void => {
      setWidth((event.target as Window).innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
  };
};
