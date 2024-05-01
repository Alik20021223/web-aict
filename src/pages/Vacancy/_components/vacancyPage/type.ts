export type BlockVacancy = { // все вакансии и тип данных которые я жду
  id: number;
  name: string;
  describe_1: string;
  respond: BlockRespond;
  detail: BlockDetailVacancy
};

export type BlockDetailVacancy = { // подробная вакансия что я жду
  describe: string,
  responsibilities: defaultType[];
  requirements: defaultType[];
  additionally: defaultType[];
  ourOffer: defaultType[];
};

export type BlockRespond = { // ин блоки респонд барои отклик 
  city: string;
  money: string;
  schedule: string;
};

export type VacancyApp = {
  data: BlockVacancy[];
};

export type defaultType =  {  // что я жду внутри каждого блока в BlockDetailVacancy
  id: number;
  value: string;
  name?:string;
};

export type FilterVacancy = { // ин фильтр тип данных которые я вам буду отправлять
  id: number;
  label: string;
  value: string;
  placeholder: string;
  items: defaultType[];
};

export type FilterApp = {
  data: FilterVacancy[];
};
