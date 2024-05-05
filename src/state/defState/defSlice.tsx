import { createSlice } from "@reduxjs/toolkit";
import { Tabs } from "../../widgets/Header/types.js";
import { defaultType, FormDataEmpty } from "../../pages/Vacancy/_components/type.js";
import { blockPrivacy } from "../../pages/PrivacyPolicy/types.js";
import { lang } from "../../core/langSelect.js";
import { SliderValue } from "@nextui-org/react";
import { PropsPresident } from "../../pages/Main/_components/mainPage/mainBlock/types.js";



type footerItem = {
  txt: string;
  link: string;
  alt?: string;
};

type footerState = {
  name: string;
  values: footerItem[];
};

type ActivityState = {
  name: string;
  id: number;
  icon: string;
};

export interface defSliceType {
  name: {
    value_3: string;
    value_4: string;
  };
  iconsFooter: footerItem[];
  dataFooter: footerState[];
  ActivityButtonData: ActivityState[];
  value: number;
  HeaderLink: Tabs[],
  ContactForm: defaultType[],
  mainBlock_2: PropsPresident,
  PrivacyPolicyData: blockPrivacy[]
  Loading: boolean,
  urlHosting: string,
  currentLang: lang,
  languages: lang[],
  DarkMode: boolean,
  sizeText: SliderValue,
  FormDataNumber: FormDataEmpty,
  formDataSubmit: boolean
  formDataClean: boolean,
}

const initialState: defSliceType = {
  name: {
    value_3: 'Агентства инновации и цифровых технологий РЕСПУБЛИКИ ТАДЖИКИСТАН',
    value_4: 'АИЦТ',
  },
  dataFooter: [
    {
      name: "АИЦТ",
      values: [
        { txt: "aboutUsh1", link: "/about" },
        { txt: "activity", link: "/activity" },
        { txt: "Documents", link: "/documents" },
        { txt: "projects", link: "/projects" },
        { txt: "events", link: "/event" },
      ],
    },
    {
      name: "Вакансии",
      values: [
        { txt: "ActualVacancy", link: "vacancies" },
      ],
    },
    {
      name: "Оффициальные ресурсы",
      values: [
        { txt: "Президент РТ", link: "#" },
        { txt: "BlogH1", link: "/blog" },
        { txt: "partners", link: "/partners" },
        { txt: "PrivacyPolicy", link: "/PrivacyPolicy" },
      ],
    },
  ],
  iconsFooter: [
    {
      link: "#",
      txt: "/icons/facebook.svg",
      alt: "facebook",
    },
    {
      link: "#",
      txt: "/icons/instag.svg",
      alt: "instagram",
    },
    {
      link: "#",
      txt: "/icons/twitter.svg",
      alt: "twitter",
    },
    {
      link: "#",
      txt: "/icons/email.svg",
      alt: "email",
    },
  ],
  value: 0,
  HeaderLink: [
    {
      name: 'Главная',
      key: 'main',
      link: '/',
    },
    {
      name: 'Об агенстве',
      key: 'aboutUsh1',
      link: '/about',
    },
    {
      name: 'Деятельность',
      key: 'activity',
      link: '/activity',
    },
    {
      name: 'Документы',
      key: 'Documents',
      link: '/document',
    },
    {
      name: 'Проекты',
      key: 'projects',
      link: '/projects',
    },
    {
      name: 'События',
      key: 'events',
      link: '/events',
    },
    {
      name: 'Вакансии',
      key: 'vacancy',
      link: '/vacancies',
    },
    {
      name: 'Контакты',
      key: 'contact',
      link: '/contact',
    },
  ],
  ContactForm: [
    {
      id: 1,
      value: 'urFio',
      name: 'fullName',
    },
    {
      id: 2,
      value: 'urJob',
      name: 'job',
    },
    {
      id: 3,
      value: 'selectCountry',
      name: 'country',
    },
    {
      id: 4,
      value: 'cityForm',
      name: 'city',
    },
    {
      id: 5,
      value: 'adressForm',
      name: 'address',
    },
    {
      id: 6,
      value: 'urPhone',
      name: 'phone',
    },
    {
      id: 7,
      value: 'urEmail',
      name: 'email',
    },
    {
      id: 8,
      value: 'subjectRequest',
      name: 'subjectRequest',
    },
  ],
  PrivacyPolicyData: [
    {
      id: 1,
      name: 'Общие положения',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 2,
      name: 'Предмет предложения',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 3,
      name: 'Порядок предложения услуг',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 4,
      name: 'Обязательства агентства',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 5,
      name: 'Обязанности пользователя',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 6,
      name: 'Осуществление учёта',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 7,
      name: 'Ответственность сторон',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 8,
      name: 'Порядок разрешения споров',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
    {
      id: 9,
      name: 'Особые положения',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit architecto tempore ea qui dolores accusantium tempora est soluta quaerat consequatur doloribus obcaecati quo cumque odit harum fugit modi possimus veniam quae odio nam ipsam vel, quas voluptate. Odit, ipsam distinctio!',
    },
  ],
  ActivityButtonData: [
    {
      id: 1,
      name: "Проектное управление",
      icon: '/img/doc-activity.svg',
    },
    {
      id: 2,
      name: "Телекоммуникации и связь",
      icon: '/img/wifi-activity.svg',
    },
    {
      id: 3,
      name: "Электронная промышленность",
      icon: '/img/chip-activity.svg',
    },
    {
      id: 4,
      name: "IT - отрасль",
      icon: '/img/it-activity.svg',
    },
    {
      id: 5,
      name: "Электронное производство",
      icon: '/img/setting-activity.svg',
    },
  ],
  mainBlock_2: {
    imgUrl: {
      url: '/img/president_1.webp',
      alt: 'president',
    },
    subtitle: 'Оффициальный сайт',
    title: 'Основатель мира и национального единства - Лидер нации, Президент Республики Таджикистан уважаемый Эмомали Рахмон',
    describe: 'Для перехода на официальный сайт президента Республики Таджикистан нажмите на кнопку “Перейти на сайт”',
    Button: {
      txt: 'Перейти на сайт',
      link: 'https://president.tj/',
    }
  },
  urlHosting: 'http://ferma.ru.swtest.ru',
  Loading: false,
  DarkMode: Boolean(localStorage.getItem('DarkMode')),
  formDataSubmit: false,
  formDataClean: false,
  sizeText: 0,
  FormDataNumber: {
    cityId: null,
    experienceId: null,
    scheduleId: null,
    industryId: null,
    salaryFrom: 0,
    salaryTo: 0,
  },
  languages: [
    { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
    { code: "tj", name: "Тоҷикӣ", flag: "https://flagcdn.com/tj.svg" },
  ],
  currentLang: { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
};

const defSlice = createSlice({
  name: "aict",
  initialState,
  reducers: {
    toggleCount: (state) => {
      state.value += 1;
    },
    handleChangeLoading: (state) => {
      console.log('lox')
      state.Loading = !state.Loading
    },
    handleChangeBg: (state) => {
      const selectMode = !state.DarkMode;
      state.DarkMode = selectMode;
      localStorage.setItem("DarkMode", JSON.stringify(selectMode));
    },
    handleChangeText: (state, action) => {
      console.log(action.payload);
      state.sizeText = action.payload
    },
    handleDefaultLang: (state) => {
      const defaultLang = state.languages.filter(lang => lang.code === localStorage.getItem('i18nextLng'))
      if (defaultLang.length != 0) {
        state.currentLang = defaultLang[0]
      }
    },
    handleChangeLang: (state, action) => {
      const selectedLang = state.languages.find(lang => lang.code === action.payload.code);
      if (selectedLang) {
        state.currentLang = selectedLang;
        localStorage.setItem("i18nextLng", selectedLang.code);
      }
    },
    handleCleanFilter: (state) => {
      state.formDataClean = true
      state.formDataSubmit = false
    },
    handleChangeFilter: (state, action) => {
      state.formDataSubmit = true;
      state.FormDataNumber = { ...action.payload };

      Object.keys(state.FormDataNumber).forEach((key) => {
        const fieldValue = state.FormDataNumber[key as keyof FormDataEmpty];

        // Если значение равно 0, устанавливаем его в null
        if (fieldValue === 0) {
          delete state.FormDataNumber[key as keyof FormDataEmpty];
        } else {
          // В противном случае, преобразуем значение в число
          state.FormDataNumber[key as keyof FormDataEmpty] = Number(fieldValue);
        }
      });
    }

  },
});

export const { toggleCount, handleChangeLoading, handleChangeLang, handleChangeBg, handleChangeText, handleChangeFilter, handleCleanFilter, handleDefaultLang } = defSlice.actions;

export default defSlice.reducer;
