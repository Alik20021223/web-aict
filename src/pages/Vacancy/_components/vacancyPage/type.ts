export type BlockVacancyType = {
  id: number,
  titleTj:  string,
  titleRu:  string,
  titleEn:  string,
  slug:  string,
  contentTj:  string,
  contentRu:  string,
  contentEn:  string,
  cityId: number,
  experienceId: number,
  scheduleId: number,
  industryId: number,
  price:  string,
  created_at:  string,
  updated_at:  string,
  schedule: BlockTypeOffer,
  industry: BlockTypeOffer,
  experience: BlockTypeOffer,
  city: BlockTypeOffer,
};

export type BlockDetailVacancy = {
  // подробная вакансия что я жду
  describe: string;
  responsibilities: defaultType[];
  requirements: defaultType[];
  additionally: defaultType[];
  ourOffer: defaultType[];
};

type BlockTypeOffer = {
  id: number;
  titleTj: string;
  titleRu: string;
  titleEn: string;
  created_at: string;
};

export type BlockRespond = {
  // ин блоки респонд барои отклик
  city: string;
  money: string;
  schedule: string;
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
