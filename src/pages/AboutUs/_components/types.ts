export type AboutAgencyType = {
  id: number;
  aboutTj: string;
  aboutRu: string;
  aboutEn: string;
  historyTj: string;
  historyRu: string;
  historyEn: string;
  powerTj: string;
  powerRu: string;
  powerEn: string;
  positionTj: string;
  positionRu: string;
  positionEn: string;
  structureCenterTj: string;
  structureCenterRu: string;
  structureCenterEn: string;
  structureOrganizeTj: string;
  structureOrganizeRu: string;
  structureOrganizeEn: string;
  created_at: string;
  updated_at: string;
};

export type AboutAgencyTypeLang = {
  about: string;
  history: string;
  power: string;
  position: string;
  structureCenter: string;
  structureOrganize: string;
};

export type personalAgency = {
  id: number,
  fullNameTj: string,
  fullNameRu: string,
  fullNameEn: string,
  positionTj: string,
  positionRu: string,
  positionEn: string,
  imagePath: string,
  created_at: string,
  updated_at: string,
};
