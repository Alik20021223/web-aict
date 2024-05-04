import { createSlice } from "@reduxjs/toolkit";
import { PropsPress } from "../../pages/Main/_components/mainPage/MediaBlock.js";
import { PropsProject } from "../../pages/Main/_components/mainPage/projectBlock.js";
import { PropsMainBlock, PropsMainBlock_2, PropsPresident } from "../../pages/Main/_components/mainPage/mainBlock/types.js";
import { Tabs } from "../../widgets/Header/types.js";
import {  defaultType } from "../../pages/Vacancy/_components/vacancyPage/type.js";
// import { ContactBlock } from "../../core/Contacts/type.js";
// import { documentBlockType } from "../../pages/Documents/_components/types.js";
// import { activityApp } from "../../pages/Activity/_components/types.js";
import { blockPrivacy } from "../../pages/PrivacyPolicy/types.js";
import { lang } from "../../core/langSelect.js";
import { SliderValue } from "@nextui-org/react";



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
  value: number;
  PressData: PropsPress[];
  MediaData: PropsPress[];
  ProjectData: PropsProject[];
  ActivityButtonData: ActivityState[];
  ActivityBlockData: footerItem[];
  mainBlock_1: PropsMainBlock[];
  mainBlock_3: PropsMainBlock_2;
  mainBlock_2: PropsPresident;
  HeaderLink: Tabs[],
  // VacancyBlock: BlockVacancy[],
  // filterVacancy: FilterVacancy[],
  ContactForm: defaultType[],
  // ActivityPage: activityApp,
  PrivacyPolicyData: blockPrivacy[]
  Loading: boolean,
  urlHosting: string,
  currentLang: lang,
  languages: lang[],
  DarkMode: boolean,
  sizeText: SliderValue,
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
        { txt: "ActualVacancy", link: "vacancy" },
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
  PressData: [
    {
      id: 1,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/pressBlock-1.webp",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
    {
      id: 2,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/pressBlock-2.webp",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
    {
      id: 3,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/pressBlock-3.webp",
        alt: "press-conf",
      },
      typePress: "Новости",
      link: "#",
    },
  ],
  MediaData: [
    {
      id: 1,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/mediaBlock-1.webp",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
    {
      id: 2,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/mediaBlock-2.webp",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
    {
      id: 3,
      date: "6 февраля, 2024",
      description: "Форум “Цифровая Экономика”",
      imgPress: {
        url: "/img/mediaBlock-3.webp",
        alt: "press-conf",
      },
      place: "Таджикистан, Душанбе",
      link: "#",
    },
  ],
  ProjectData: [
    {
      urlImg: "/img/cloud.svg",
      title: "Электронное правительство Республики Таджикистан",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
    },
    {
      urlImg: "/img/imei.svg",
      title: "Регистрация IMEI в единой системе",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
    },
    {
      urlImg: "/img/it-start.svg",
      title: "Проект “Международный технопарк IT-стартапов”",
      describe:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
      link: "#",
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
  ActivityBlockData: [
    {
      txt: 'Проектное управление',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Телекоммуникации и связь',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Электронная промышленность',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'IT - отрасль',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
    },
    {
      txt: 'Электронное производство',
      link: 'В настоящее время в Таджикистане зарегистрировано 2,5 млн. абонентов фиксированной связи, то есть это те люди, которые пользуются стационарным телефоном.  При этом с каждым годом доля фиксированной связи в  общем  объеме телекоммуникационного  рынка снижается,  уступая  место мобильной связи. Что касается мобильной связи, то количество зарегистрированных абонентов превысило 25,8 млн.',
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
  mainBlock_3: {
    link: '#',
    date: 'Июнь 24, 2023',
    name: 'Цифровизация в госсекторе: итоги 2023',
    describe: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, possimus.',
  },
  mainBlock_1: [
    {
      id: 1,
      date: 'Июнь 24, 2023',
      name: 'Таджикистан и Казахстан подписали меморандум о цифровых технологиях',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet eum culpa optio aperiam esse voluptates possimus minus magnam hic.',
      link: '#',
      imgUrl: {
        url: '/img/aict-main.webp',
        alt: 'aict-main',
      },
    },
    {
      id: 2,
      date: 'Июнь 24, 2023',
      name: 'Таджикистан и Казахстан подписали меморандум о цифровых технологиях',
      link: '#',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet eum culpa optio aperiam esse voluptates possimus minus magnam hic.',
      imgUrl: {
        url: '/img/mediaBlock-1.webp',
        alt: 'aict-main',
      },
    },
    {
      id: 3,
      date: 'Июнь 24, 2023',
      link: '#',
      name: 'Таджикистан и Казахстан подписали меморандум о цифровых технологиях',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet eum culpa optio aperiam esse voluptates possimus minus magnam hic.',
      imgUrl: {
        url: '/img/pressBlock-1.webp',
        alt: 'aict-main',
      },
    },
  ],
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
      link: '/vacancy',
    },
    {
      name: 'Контакты',
      key: 'contact',
      link: '/contact',
    },
  ],
  // VacancyBlock: [
  //   {
  //     id: 1,
  //     name: 'Специалист по работе с клиентами',
  //     describe_1: 'Открываем двери для крутых специалистов, желающих присоединиться к отделу по работе с клиентами. Мы ценим и новичков, и профессионалов с опытом.',
  //     detail: {
  //       describe: 'Мы в поисках специалиста по работе с государственными органами, мастера дипломатии и переговоров, готового эффективно решать вопросы и вносить вклад в развитие АИЦТ.',
  //       responsibilities: [
  //         {
  //           id: 1,
  //           value: 'вести переговоры с проблемными клиентами',
  //         },
  //         {
  //           id: 2,
  //           value: 'тесно работать с государственными органами и судами',
  //         },
  //         {
  //           id: 3,
  //           value: 'подготавливать заявления и письма;',
  //         },
  //         {
  //           id: 4,
  //           value: 'рассматривать заявления заёмщиков и другие виды заявлений',
  //         },
  //       ],
  //       requirements: [
  //         {
  //           id: 1,
  //           value: 'юридическое образование',
  //         },
  //         {
  //           id: 2,
  //           value: 'опыт работы от 1 года в сфере юриспруденции',
  //         },
  //         {
  //           id: 3,
  //           value: 'свободное владение таджикским и русским языками',
  //         },
  //       ],
  //       additionally: [
  //         {
  //           id: 1,
  //           value: 'честность и скромность',
  //         },
  //         {
  //           id: 2,
  //           value: 'ответственность и пунктуальность',
  //         },
  //         {
  //           id: 3,
  //           value: 'энергичность и коммуникабельность',
  //         },
  //       ],
  //       ourOffer: [
  //         {
  //           id: 1,
  //           value: 'пятидневный рабочий график с 09:00-18:00',
  //         },
  //         {
  //           id: 2,
  //           value: 'конкурентную оплату труда',
  //         },
  //         {
  //           id: 3,
  //           value: 'карьерный рост',
  //         },
  //         {
  //           id: 4,
  //           value: 'дружелюбный коллектив и развитие вместе с компанией',
  //         },
  //         {
  //           id: 5,
  //           value: 'кафетерий льгот и различные тимбилдинги',
  //         },
  //       ],
  //     },
  //     respond: {
  //       city: 'Душанбе',
  //       money: '2000 смн',
  //       schedule: 'Полный день'
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: 'Специалист по работе с клиентами',
  //     describe_1: 'Открываем двери для крутых специалистов, желающих присоединиться к отделу по работе с клиентами. Мы ценим и новичков, и профессионалов с опытом.',
  //     detail: {
  //       describe: 'Мы в поисках специалиста по работе с государственными органами, мастера дипломатии и переговоров, готового эффективно решать вопросы и вносить вклад в развитие АИЦТ.',
  //       responsibilities: [
  //         {
  //           id: 1,
  //           value: 'вести переговоры с проблемными клиентами',
  //         },
  //         {
  //           id: 2,
  //           value: 'тесно работать с государственными органами и судами',
  //         },
  //         {
  //           id: 3,
  //           value: 'подготавливать заявления и письма;',
  //         },
  //         {
  //           id: 4,
  //           value: 'рассматривать заявления заёмщиков и другие виды заявлений',
  //         },
  //       ],
  //       requirements: [
  //         {
  //           id: 1,
  //           value: 'юридическое образование',
  //         },
  //         {
  //           id: 2,
  //           value: 'опыт работы от 1 года в сфере юриспруденции',
  //         },
  //         {
  //           id: 3,
  //           value: 'свободное владение таджикским и русским языками',
  //         },
  //       ],
  //       additionally: [
  //         {
  //           id: 1,
  //           value: 'честность и скромность',
  //         },
  //         {
  //           id: 2,
  //           value: 'ответственность и пунктуальность',
  //         },
  //         {
  //           id: 3,
  //           value: 'энергичность и коммуникабельность',
  //         },
  //       ],
  //       ourOffer: [
  //         {
  //           id: 1,
  //           value: 'пятидневный рабочий график с 09:00-18:00',
  //         },
  //         {
  //           id: 2,
  //           value: 'конкурентную оплату труда',
  //         },
  //         {
  //           id: 3,
  //           value: 'карьерный рост',
  //         },
  //         {
  //           id: 4,
  //           value: 'дружелюбный коллектив и развитие вместе с компанией',
  //         },
  //         {
  //           id: 5,
  //           value: 'кафетерий льгот и различные тимбилдинги',
  //         },
  //       ],
  //     },
  //     respond: {
  //       city: 'Душанбе',
  //       money: '2000 смн',
  //       schedule: 'Полный день'
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: 'Специалист по работе с клиентами',
  //     describe_1: 'Открываем двери для крутых специалистов, желающих присоединиться к отделу по работе с клиентами. Мы ценим и новичков, и профессионалов с опытом.',
  //     detail: {
  //       describe: 'Мы в поисках специалиста по работе с государственными органами, мастера дипломатии и переговоров, готового эффективно решать вопросы и вносить вклад в развитие АИЦТ.',
  //       responsibilities: [
  //         {
  //           id: 1,
  //           value: 'вести переговоры с проблемными клиентами',
  //         },
  //         {
  //           id: 2,
  //           value: 'тесно работать с государственными органами и судами',
  //         },
  //         {
  //           id: 3,
  //           value: 'подготавливать заявления и письма;',
  //         },
  //         {
  //           id: 4,
  //           value: 'рассматривать заявления заёмщиков и другие виды заявлений',
  //         },
  //       ],
  //       requirements: [
  //         {
  //           id: 1,
  //           value: 'юридическое образование',
  //         },
  //         {
  //           id: 2,
  //           value: 'опыт работы от 1 года в сфере юриспруденции',
  //         },
  //         {
  //           id: 3,
  //           value: 'свободное владение таджикским и русским языками',
  //         },
  //       ],
  //       additionally: [
  //         {
  //           id: 1,
  //           value: 'честность и скромность',
  //         },
  //         {
  //           id: 2,
  //           value: 'ответственность и пунктуальность',
  //         },
  //         {
  //           id: 3,
  //           value: 'энергичность и коммуникабельность',
  //         },
  //       ],
  //       ourOffer: [
  //         {
  //           id: 1,
  //           value: 'пятидневный рабочий график с 09:00-18:00',
  //         },
  //         {
  //           id: 2,
  //           value: 'конкурентную оплату труда',
  //         },
  //         {
  //           id: 3,
  //           value: 'карьерный рост',
  //         },
  //         {
  //           id: 4,
  //           value: 'дружелюбный коллектив и развитие вместе с компанией',
  //         },
  //         {
  //           id: 5,
  //           value: 'кафетерий льгот и различные тимбилдинги',
  //         },
  //       ],
  //     },
  //     respond: {
  //       city: 'Душанбе',
  //       money: '2000 смн',
  //       schedule: 'Полный день'
  //     }
  //   },
  //   {
  //     id: 4,
  //     name: 'Специалист по работе с клиентами',
  //     describe_1: 'Открываем двери для крутых специалистов, желающих присоединиться к отделу по работе с клиентами. Мы ценим и новичков, и профессионалов с опытом.',
  //     detail: {
  //       describe: 'Мы в поисках специалиста по работе с государственными органами, мастера дипломатии и переговоров, готового эффективно решать вопросы и вносить вклад в развитие АИЦТ.',
  //       responsibilities: [
  //         {
  //           id: 1,
  //           value: 'вести переговоры с проблемными клиентами',
  //         },
  //         {
  //           id: 2,
  //           value: 'тесно работать с государственными органами и судами',
  //         },
  //         {
  //           id: 3,
  //           value: 'подготавливать заявления и письма;',
  //         },
  //         {
  //           id: 4,
  //           value: 'рассматривать заявления заёмщиков и другие виды заявлений',
  //         },
  //       ],
  //       requirements: [
  //         {
  //           id: 1,
  //           value: 'юридическое образование',
  //         },
  //         {
  //           id: 2,
  //           value: 'опыт работы от 1 года в сфере юриспруденции',
  //         },
  //         {
  //           id: 3,
  //           value: 'свободное владение таджикским и русским языками',
  //         },
  //       ],
  //       additionally: [
  //         {
  //           id: 1,
  //           value: 'честность и скромность',
  //         },
  //         {
  //           id: 2,
  //           value: 'ответственность и пунктуальность',
  //         },
  //         {
  //           id: 3,
  //           value: 'энергичность и коммуникабельность',
  //         },
  //       ],
  //       ourOffer: [
  //         {
  //           id: 1,
  //           value: 'пятидневный рабочий график с 09:00-18:00',
  //         },
  //         {
  //           id: 2,
  //           value: 'конкурентную оплату труда',
  //         },
  //         {
  //           id: 3,
  //           value: 'карьерный рост',
  //         },
  //         {
  //           id: 4,
  //           value: 'дружелюбный коллектив и развитие вместе с компанией',
  //         },
  //         {
  //           id: 5,
  //           value: 'кафетерий льгот и различные тимбилдинги',
  //         },
  //       ],
  //     },
  //     respond: {
  //       city: 'Душанбе',
  //       money: '2000 смн',
  //       schedule: 'Полный день'
  //     }
  //   },
  //   {
  //     id: 5,
  //     name: 'Специалист по работе с клиентами',
  //     describe_1: 'Открываем двери для крутых специалистов, желающих присоединиться к отделу по работе с клиентами. Мы ценим и новичков, и профессионалов с опытом.',
  //     detail: {
  //       describe: 'Мы в поисках специалиста по работе с государственными органами, мастера дипломатии и переговоров, готового эффективно решать вопросы и вносить вклад в развитие АИЦТ.',
  //       responsibilities: [
  //         {
  //           id: 1,
  //           value: 'вести переговоры с проблемными клиентами',
  //         },
  //         {
  //           id: 2,
  //           value: 'тесно работать с государственными органами и судами',
  //         },
  //         {
  //           id: 3,
  //           value: 'подготавливать заявления и письма;',
  //         },
  //         {
  //           id: 4,
  //           value: 'рассматривать заявления заёмщиков и другие виды заявлений',
  //         },
  //       ],
  //       requirements: [
  //         {
  //           id: 1,
  //           value: 'юридическое образование',
  //         },
  //         {
  //           id: 2,
  //           value: 'опыт работы от 1 года в сфере юриспруденции',
  //         },
  //         {
  //           id: 3,
  //           value: 'свободное владение таджикским и русским языками',
  //         },
  //       ],
  //       additionally: [
  //         {
  //           id: 1,
  //           value: 'честность и скромность',
  //         },
  //         {
  //           id: 2,
  //           value: 'ответственность и пунктуальность',
  //         },
  //         {
  //           id: 3,
  //           value: 'энергичность и коммуникабельность',
  //         },
  //       ],
  //       ourOffer: [
  //         {
  //           id: 1,
  //           value: 'пятидневный рабочий график с 09:00-18:00',
  //         },
  //         {
  //           id: 2,
  //           value: 'конкурентную оплату труда',
  //         },
  //         {
  //           id: 3,
  //           value: 'карьерный рост',
  //         },
  //         {
  //           id: 4,
  //           value: 'дружелюбный коллектив и развитие вместе с компанией',
  //         },
  //         {
  //           id: 5,
  //           value: 'кафетерий льгот и различные тимбилдинги',
  //         },
  //       ],
  //     },
  //     respond: {
  //       city: 'Душанбе',
  //       money: '2000 смн',
  //       schedule: 'Полный день'
  //     }
  //   },
  // ],
  // filterVacancy: [
  //   {
  //     id: 1,
  //     label: 'Город',
  //     value: 'city',
  //     placeholder: 'selectCity',
  //     items: [
  //       {
  //         id: 1,
  //         value: 'Душанбе',
  //       },
  //       {
  //         id: 2,
  //         value: 'Худжанд',
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     label: 'Опыт',
  //     value: 'experience',
  //     placeholder: 'SelectExperiense',
  //     items: [
  //       {
  //         id: 1,
  //         value: 'Без опыта',
  //       },
  //       {
  //         id: 2,
  //         value: 'Год',
  //       },
  //       {
  //         id: 3,
  //         value: '2 года и более',
  //       },
  //     ]
  //   },
  //   {
  //     id: 3,
  //     label: 'График работы',
  //     value: 'graphic',
  //     placeholder: 'SelectGraphic',
  //     items: [
  //       {
  //         id: 1,
  //         value: 'Полный день',
  //       },
  //       {
  //         id: 2,
  //         value: 'Удаленно',
  //       },
  //     ]
  //   },
  //   {
  //     id: 4,
  //     label: 'Отрасль',
  //     value: 'activity',
  //     placeholder: 'SelectType',
  //     items: [
  //       {
  //         id: 1,
  //         value: 'Финансы',
  //       },
  //       {
  //         id: 2,
  //         value: 'It - специалисты',
  //       },
  //     ]
  //   },
  // ],
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
  // ActivityPage: {
  //   mainActivity: {
  //     describe: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quidem fugit provident quibusdam voluptatum neque, voluptatem praesentium cumque doloremque distinctio',
  //   },
  //   activityBlocks: [
  //     {
  //       id: 1,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       blockIcon: '/img/electroIconActivity.svg'
  //     },
  //     {
  //       id: 2,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       imgBlocks: {
  //         img_1: '/ActivityImage/img_1.svg',
  //         img_2: '/ActivityImage/img_2.svg',
  //         img_3: '/ActivityImage/img_3.svg',
  //       }
  //     },
  //     {
  //       id: 3,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       blockIcon: '/img/electroIconActivity.svg'
  //     },
  //     {
  //       id: 4,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       imgBlocks: {
  //         img_1: '/ActivityImage/img_1.svg',
  //         img_2: '/ActivityImage/img_2.svg',
  //         img_3: '/ActivityImage/img_3.svg',
  //       }
  //     },
  //     {
  //       id: 5,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       blockIcon: '/img/electroIconActivity.svg'
  //     },
  //     {
  //       id: 6,
  //       name: 'Электронное правительство',
  //       describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio laborum quod ipsa aliquam magnam laudantium reprehenderit accusamus esse quae.',
  //       imgBlocks: {
  //         img_1: '/ActivityImage/img_1.svg',
  //         img_2: '/ActivityImage/img_2.svg',
  //         img_3: '/ActivityImage/img_3.svg',
  //       }
  //     },
  //   ]
  // },
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
  urlHosting: 'http://ferma.ru.swtest.ru',
  Loading: false,
  DarkMode: Boolean(localStorage.getItem('DarkMode')),
  sizeText: 0,
  languages: [
    { code: "en", name: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "ru", name: "Русский", flag: "https://flagcdn.com/ru.svg" },
    { code: "tj", name: "Тоҷикӣ", flag: "https://flagcdn.com/tj.svg" },
  ],
  currentLang: {
    code: 'ru',
    name: 'Русский',
    flag: 'https://flagcdn.com/ru.svg'
  },
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
    handleChangeLang: (state, action) => {
      const selectedLang = state.languages.find(lang => lang.code === action.payload.code);
      if (selectedLang) {
        state.currentLang = selectedLang;
        localStorage.setItem("i18nextLng", selectedLang.code);
      }
    }
  },
});

export const { toggleCount, handleChangeLoading, handleChangeLang, handleChangeBg, handleChangeText } = defSlice.actions;

export default defSlice.reducer;
