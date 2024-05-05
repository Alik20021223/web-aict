import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Footer } from './widgets/Footer'
import { Header } from './widgets/Header/Header'
import { ExtraQuestion } from './widgets/extraQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { useEffect, useState } from 'react'
import { handleDefaultLang } from './state/defState/defSlice'


function App() {
  const location = useLocation();
  const [DarkMode, setDarkMode] = useState<boolean>(false)
  const sizeText = useSelector((state: RootState) => state.aict.sizeText);
  const DarkModeState = useSelector((state: RootState) => state.aict.DarkMode)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDefaultLang())
  }, [])
  

  useEffect(() => {
    const localDarkMode = localStorage.getItem('DarkMode')
    setDarkMode(localDarkMode === 'true' ? true : DarkModeState)
  }, [DarkModeState])

  const sizeTextClassName = `text_${sizeText.toString().replace('.', '')}`;
  const bodyElement = document.body;
  bodyElement.classList.toggle('dark', DarkMode);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={`${sizeText ? sizeTextClassName : ''} bg-[#F7F7F7] dark:bg-darkBg`}>
        <Header />
        <Outlet />
        <ExtraQuestion />
        <Footer />
      </div>
    </>
  )
}

export default App
