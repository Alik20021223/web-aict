import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Footer } from './widgets/Footer'
import { Header } from './widgets/Header/Header'
import { ExtraQuestion } from './widgets/extraQuestion'
import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import { useEffect } from 'react'


function App() {
  const location = useLocation();
  const VisibleBtn = useSelector((state: RootState) => state.aict.VisibleBtn);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={VisibleBtn ? 'visible-active' : ''}>
        <Header />
        <Outlet />
        <ExtraQuestion />
        <Footer />
      </div>
    </>
  )
}

export default App
