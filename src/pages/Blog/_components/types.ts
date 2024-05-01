export type BlogDescribeApp = {
  id: number;
  title: string;
  slug: string;
  link: string | null;
  description: string;
  imagePath: string;
  created_at: string;
  updated_at: string;
};

export type BlogBlockType = {
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

export type BlogShowPage = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imagePath: string;
  isPublished: number;
  created_at: string;
  updated_at: string;
};
