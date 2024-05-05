import { useEffect } from 'react';

const ScrollToTopOnPageChange = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
};

export default ScrollToTopOnPageChange;