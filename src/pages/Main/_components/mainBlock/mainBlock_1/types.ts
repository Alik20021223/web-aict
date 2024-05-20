export type BlockAppTxt = {
  data: SwiperTxt[];
  currentPoint: number;
  handleNextClick?: () => void;
  handlePrevClick?: () => void;
};

export type SwiperTxt = {
  id: number;
  slug: string;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  descriptionTj: string;
  descriptionRu: string;
  descriptionEn: string;
  imagePath: string;
  time: string;
  created_at: string;
  updated_at: string;
  [key: string]: any,
};

