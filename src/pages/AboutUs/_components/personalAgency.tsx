
import { SliderPersonal } from "../../../widgets/AboutUsWidgets/sliderPersonal";
import { personalAgency } from "./types";


interface PersonalBlockApp {
  data: personalAgency[];
}

export const PersonalAgency: React.FC<PersonalBlockApp> = ({ data }) => {

  

  return (
    data.length !== 0 && (
      <div className="md:bg-white md:shadow-md md:rounded-xl">
        <div className="py-[110px] pl-[110px] max-lg:px-10 max-md:px-0 max-md:py-0 max-lg:py-16">
          <SliderPersonal data={data} />
        </div>
      </div>
    )
  );
};
