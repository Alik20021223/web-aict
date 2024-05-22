import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './pages/Main/Main.tsx';
import { VacancyDescribe } from './pages/Vacancy/VacancyDescribe.tsx';
import Vacancy from './pages/Vacancy/VacancyMain';
import { ParentApplyVacancy } from './widgets/VacancyWidgets/VacancyApply.tsx';
import { Contacts } from './pages/Contacts/contacts.tsx';
import { ParentContactForm } from './widgets/ContactsWidgets/ParentContactForm.tsx';
import NextTopLoader from 'nextjs-toploader';
import { AboutUs } from './pages/AboutUs/aboutUs.tsx';
import { Documents } from './pages/Documents/documents.tsx';
import { Activity } from './pages/Activity/activity.tsx';
import { Policy } from './pages/PrivacyPolicy/policy.tsx';
import { Blog } from './pages/Blog/blog.tsx';
import { Projects } from './pages/Projects/projects.tsx';
import { Events } from './pages/Events/Events.tsx';
import { BlogDescribe } from './widgets/Blog/BlogDescribe.tsx';
import { ProjectDescribe } from './pages/Projects/_components/projectDescribe.tsx';
import { ErrorBlock } from './core/Error.tsx';
import { Partners } from './pages/Partners/partners.tsx';
import { Questions } from './pages/Questions/questions.tsx';
import { EventDescribe } from './pages/Events/EventDescribe.tsx';
import { Gallery } from './pages/PhotoAndVideo/PhotoAndVideo.tsx';
import './i18n.ts'
import './index.css'
import { PhotoDescribe } from './pages/PhotoAndVideo/PhotoDescribe.tsx';
import { Personal } from './pages/Personal/personal.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBlock />,
    children: [
      {
        path: '',
        element: <Main />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'vacancies',
        element: <Vacancy />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'vacancies/:slug',
        element: <VacancyDescribe />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'vacancies/:slug/apply',
        element: <ParentApplyVacancy />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'contact',
        element: <Contacts />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'contact/form-help',
        element: <ParentContactForm />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'about',
        element: <AboutUs />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'about/personals/:personId',
        element: <Personal />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'documents',
        element: <Documents />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'activity',
        element: <Activity />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'PrivacyPolicy',
        element: <Policy />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'blog',
        element: <Blog />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'blog/:category/:slug',
        element: <BlogDescribe />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'projects/:time/:slug',
        element: <ProjectDescribe />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'projects',
        element: <Projects />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'partners',
        element: <Partners />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'questions',
        element: <Questions />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'events',
        element: <Events />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'events/:time/:slug',
        element: <EventDescribe />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
        errorElement: <ErrorBlock />,
      },
      {
        path: 'gallery/:category/:slug',
        element: <PhotoDescribe />,
        errorElement: <ErrorBlock />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <Provider store={store}>
      <NextTopLoader
        color="#00AF66"
        initialPosition={0.08}
        crawlSpeed={10}
        height={3}
        showSpinner={true}
        easing="ease"
        speed={500}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </NextUIProvider>,
)

