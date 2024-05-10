import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { Footer } from './widgets/Footer'
import { Header } from './widgets/Header/Header'
import { ExtraQuestion } from './widgets/extraQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { useEffect, useState } from 'react'
import { handleDefaultLang, handleDefaultMode } from './state/defState/defSlice'
import { LoadingPage } from './core/LoadingPage'
import api from './api'
import { TechPage } from './pages/TechPage/TechPage'


function App() {
  const location = useLocation();
  const [DarkMode, setDarkMode] = useState<boolean>(false)
  const sizeText = useSelector((state: RootState) => state.aict.sizeText);
  const DarkModeState = useSelector((state: RootState) => state.aict.DarkMode)
  const useLoading = useSelector((state: RootState) => state.aict.loadingPage)
  const [techPage, setTechPage] = useState<boolean>(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDefaultLang())
    dispatch(handleDefaultMode())
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      api.get('articles/per-page/1')
        .then(res => {
          setTechPage(false); // Сброс значения techPage в случае успешного запроса
        })
        .catch(err => {
          if (err.response && err.response.data && err.response.data.message === 'Введутся технические работы') {
            setTechPage(true); // Установка значения techPage в true, если получен соответствующий ответ
          } else {
            setTechPage(false); // Сброс значения techPage в случае других ошибок
          }
        });
    }, 5000);
  
    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);



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
      {techPage ? <TechPage /> :
        <div className={`${sizeText ? sizeTextClassName : ''} bg-[#F7F7F7] dark:bg-darkBg`}>
          {useLoading ? <LoadingPage /> : <>
            <Header />
            <Outlet />
            <ExtraQuestion />
            <Footer />
          </>}
        </div>}
    </>
  )
}

export default App
