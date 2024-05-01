import { useEffect } from 'react';

const ScrollToTopOnPageChange = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  console.log('lox');
  

  return null;
};

export default ScrollToTopOnPageChange;