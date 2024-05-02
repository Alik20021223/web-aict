import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { personalAgency } from "../../pages/AboutUs/_components/types";

interface PersonalBlockApp {
  data: personalAgency;
}

export const PersonalBlockAbout: React.FC<PersonalBlockApp> = ({ data }) => {
  const currentLang = useSelector((state: RootState) => state.aict.currentLang);
  const urlHosting = useSelector((state: RootState) => state.aict.urlHosting);


  const getDataByLanguage = (data: personalAgency) => {
    return {
      fullName: currentLang.code === 'ru' ? data.fullNameRu : currentLang.code === 'en' ? data.fullNameEn : data.fullNameTj,
      position: currentLang.code === 'ru' ? data.positionRu : currentLang.code === 'en' ? data.positionEn : data.positionTj,
    };
  };

  const { fullName, position } = getDataByLanguage(data);

  return (
    <div>
      <div className="flex max-md:bg-white rounded-xl max-md:p-4 md:border-2">
        <div className="overflow-hidden rounded-l-xl max-md:rounded-xl">
          <img src={`${urlHosting}/${data.imagePath}`} alt={fullName} className="object-cover rounded-l-xl w-full h-full max-w-full" />
        </div>
        <div className="flex-col py-[46px] pl-[30px] flex space-y-5">
          <h1 className="font-semibold text-2xl">{fullName}</h1>
          <p className="font-normal text-[#8F8F8F] text-base">{position}</p>
        </div>
      </div>
    </div>
  );
};
