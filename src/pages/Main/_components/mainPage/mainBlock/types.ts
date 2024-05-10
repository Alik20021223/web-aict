import { SwiperTxt } from "./mainBlock_1/types";

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





export type PropsMainApp = {
  data: SwiperTxt[];
};

export type PropsMainBlock_2 = {
  category: string;
  id: number;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  descriptionTj: string;
  descriptionRu: string;
  descriptionEn: string;
  slug: string;
  imagePath: string;
  created_at: string;
};

export type PropsApp = {
  data: PropsMainBlock_2[];
};
