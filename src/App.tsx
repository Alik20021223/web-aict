import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './widgets/Footer'
import { Header } from './widgets/Header/Header'
import { ExtraQuestion } from './widgets/extraQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { useEffect, useState } from 'react'
import { handleDefaultLang } from './state/defState/defSlice'
import { TechPage } from './pages/TechPage/TechPage'
import { LoadingPage } from './core/LoadingPage.tsx';
import api from './api'
import './App.css'

function App() {
  const location = useLocation();
  const [DarkMode, setDarkMode] = useState<boolean>(false)
  const sizeText = useSelector((state: RootState) => state.aict.sizeText);
  const DarkModeState = useSelector((state: RootState) => state.aict.DarkMode)
  const [techPage, setTechPage] = useState<boolean>(false)
  const bodyElement = document.body;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDefaultLang())
  }, [])

  useEffect(() => {
    api.get('articles/per-page/1')
      .then(() => {
        setTechPage(false); // Сброс значения techPage в случае успешного запроса
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message === 'Введутся технические работы') {
          setTechPage(true); // Установка значения techPage в true, если получен соответствующий ответ
        } else {
          setTechPage(false); // Сброс значения techPage в случае других ошибок
        }
      });
  }, []);



  useEffect(() => {
    const localDarkMode = localStorage.getItem('DarkMode')
    setDarkMode(localDarkMode === 'true' ? true : DarkModeState)

  }, [DarkModeState])

  const sizeTextClassName = `text_${sizeText.toString().replace('.', '')}`;
  bodyElement.classList.toggle('dark', DarkMode);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {techPage ? <TechPage /> :
        <div className={`${sizeText ? sizeTextClassName : ''} bg-[#F7F7F7] dark:bg-darkBg`}>
          <Header />
          <LoadingPage>
            <Outlet />
          </LoadingPage>
          <ExtraQuestion />
          <Footer />
        </div>
      }
    </>
  )
}

export default App