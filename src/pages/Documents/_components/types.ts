export type documentBlockType = {
  id: number,
  titleTj: string,
  titleRu: string,
  titleEn: string,
  descriptionTj: string,
  descriptionRu: string,
  descriptionEn: string,
  activeFrom: string,
  filePathTj: string,
  filePathRu: string,
  filePathEn: string,
  created_at: string,
  updated_at: string,
  category: {
    id: number,
    titleTj: string,
    titleRu: string,
    titleEn: string,
    created_at: string,
    updated_at: string,
  },
};

export type CategoryType = {
  id: number;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  created_at: string;
  updated_at: string;
};
