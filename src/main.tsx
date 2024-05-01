import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
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
import './i18n.ts'
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




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBlock />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'vacancy',
        element: <Vacancy />,
      },
      {
        path: 'vacancy/:vacancyId',
        element: <VacancyDescribe />,
      },
      {
        path: 'vacancy/:vacancyId/apply',
        element: <ParentApplyVacancy />
      },
      {
        path: 'contact',
        element: <Contacts />
      },
      {
        path: 'contact/form-help',
        element: <ParentContactForm />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'document',
        element: <Documents />
      },
      {
        path: 'activity',
        element: <Activity />
      },
      {
        path: 'PrivacyPolicy',
        element: <Policy />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:category/:slug',
        element: <BlogDescribe />
      },
      {
        path: 'projects/:slug',
        element: <ProjectDescribe />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'partners',
        element: <Partners />
      },
      {
        path: 'questions',
        element: <Questions />,
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'events/:time/:slug',
        element: <EventDescribe />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
    </NextUIProvider >
  </React.StrictMode>,
)

