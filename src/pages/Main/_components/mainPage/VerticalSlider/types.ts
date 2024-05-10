

export type TVerticalSliderProps = {
  currentPoint: number;
  sliders: activity[];
  getValueByLanguage: (txt: string) => string
};

export type activity = {
  id: number,
  titleTj: string,
  titleRu: string,
  titleEn: string,
  descriptionTj: string,
  descriptionRu: string,
  descriptionEn: string,
  updated_at: string,
  iconPath: string,
  created_at: string,
  icon: string,
  [key: string]: any;
};


