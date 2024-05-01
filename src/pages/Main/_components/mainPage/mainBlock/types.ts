export type PropsPresident = {
  imgUrl: {
    url: string;
    alt: string;
  };
  subtitle: string;
  title: string;
  describe: string;
  Button: {
    txt: string;
    link: string;
  };
};

export type PresidentApp = {
  data: PropsPresident;
};

type imgUrlType = {
    url: string;
    alt: string;
}

export type PropsMainBlock = {
  id: number;
  date: string;
  name: string;
  link: string;
  describe: string;
  imgUrl: imgUrlType
};

export type PropsMainApp = {
    data: PropsMainBlock[];
  };

export type PropsMainBlock_2 = {
  link: string;
  date: string;
  name: string;
  describe: string;
};

export type PropsApp = {
  data: PropsMainBlock_2;
};
