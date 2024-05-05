export type BlockVacancyType = {
  id: number;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  slug: string;
  contentTj: string;
  contentRu: string;
  contentEn: string;
  cityId: number;
  experienceId: number;
  scheduleId: number;
  industryId: number;
  price: string;
  created_at: string;
  updated_at: string;
  schedule: BlockTypeOffer;
  industry: BlockTypeOffer;
  experience: BlockTypeOffer;
  city: BlockTypeOffer;
  [key: string]: any;
};

export type BlockTypeOffer = {
  id: number;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  created_at: string;
  [key: string]: any;
};

export type BlockDetailVacancy = {
  // подробная вакансия что я жду
  describe: string;
  responsibilities: defaultType[];
  requirements: defaultType[];
  additionally: defaultType[];
  ourOffer: defaultType[];
};

export type BlockRespond = {
  cityId: BlockTypeOffer;
  experienceId: BlockTypeOffer;
  scheduleId: BlockTypeOffer;
  industryId: BlockTypeOffer;
};

export type VacancyApp = {
  data: BlockVacancyType[];
};

export type defaultType = {
  // что я жду внутри каждого блока в BlockDetailVacancy
  id: number;
  value: string;
  name?: string;
};

export type FormDataEmpty = {
  cityId: number | null;
  experienceId: number | null;
  scheduleId: number | null;
  industryId: number | null;
  salaryFrom: number | null;
  salaryTo: number | null;
};

export type FilterVacancy = {
  // ин фильтр тип данных которые я вам буду отправлять
  id: number;
  label: string;
  value: string;
  placeholder: string;
  items: defaultType[];
};

export type FilterApp = {
  data: FilterVacancy[];
};
