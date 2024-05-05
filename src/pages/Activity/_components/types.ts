export type activityApp = {
  mainActivity: {
    descriptionTj: string;
    descriptionRu: string;
    descriptionEn: string;
  };
  activityBlocks: blockActivity[];
};

export type blockActivity = {
  id: number,
  titleTj: string,
  titleRu: string,
  titleEn: string,
  descriptionTj: string,
  descriptionRu: string,
  descriptionEn: string,
  iconPath: string,
  created_at: string,
  updated_at: string,
  [key: string]: any;
};
