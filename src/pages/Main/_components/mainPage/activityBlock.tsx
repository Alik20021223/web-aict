import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { VerticalSlider } from "./VerticalSlider/VerticalSlider";
import { ExpandLess, } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useResize } from "../../../../hook/useWidthSize";
import api from "../../../../api";
import { activity } from "./VerticalSlider/types";

export const ActivityBlock = () => {
  const ActivityButtonData = useSelector(
    (state: RootState) => state.aict.ActivityButtonData
  );
  const currentLang = useSelector((state: RootState) => state.aict.currentLang)
  const [data, setData] = useState<activity[]>([])
  const [isActive, setActive] = useState<string>(ActivityButtonData[0].name);
  const [currentPoint, setCurrentPoint] = useState<number>(0);
  

  useEffect(() => {
    api.get('activities').then(res => {
      setData(res.data.data.slice(0, 5))
    }).catch(err => console.log(err))
  }, [])


  const newData = data.map((item, index) => {
    if (ActivityButtonData[index]) {
      item.icon = ActivityButtonData[index].icon;
    }
    return item;
  });



  const getValueByLanguage = (field: string) => {
    switch (currentLang.code) {
      case "ru":
        return field + "Ru";
      case "en":
        return field + "En";
      case "tj":
        return field + "Tj";
      default:
        return field;
    }
  };




  const navigate = useNavigate();
  const { width } = useResize();

  const handleActive = (active: string, index: number) => {
    const isSmallScreen = width <= 880
    setActive(active);
    setCurrentPoint(index);
    isSmallScreen ? navigate("/activity") : null
  };



  return (
    <div className="p-[25px] max-sm:p-4 shadow-md  mt-[40px] flex gap-6 justify-between bg-[#E9EAEF] dark:bg-darkBorder rounded-lg max-h-[450px] 2xl:max-h-[550px] overflow-hidden">
      <div className="flex flex-col items-start max-sm:p-4 justify-start w-[32%] md:w-full sm:w-full max-sm:w-full lg:w-[42%] *:mb-[35px] bg-white dark:bg-dark p-[25px] rounded-lg">
        {newData.map((item, i) => (
          <Button
            onClick={() => handleActive(item[getValueByLanguage('title')], i)}
            className={`bg-white dark:bg-dark last:mb-0 !px-0 w-full 2xl:py-8 flex justify-between  ${isActive === item[getValueByLanguage('title')]
              ? "font-semibold text-[#383B43]"
              : "font-medium"
              }`}
            key={item.id}
          >
            <div className="flex items-center">
              <div
                className={`p-2 lg:p-1 sm:mr-2 max-sm:mr-2 2xl:p-4  ${isActive === item[getValueByLanguage('title')] ? "bg-primary" : "bg-[#EEF1F6] dark:bg-darkBg"
                  } transition duration-300 ease-in-out  rounded-[10px]`}
              >
                <img
                  src={item.icon}
                  className={`${isActive === item[getValueByLanguage('title')] ? "icon-active" : "icon"} max-w-xl`}
                  alt="icon"
                />
              </div>

              <p className="2xl:text-2xl xl:text-lg md:text-xl lg:text-base dark:text-white">{item[getValueByLanguage('title')]}</p>
            </div>
            <div className="lg:hidden max-md:block">
              <ExpandLess className="rotate-90 " />
            </div>
          </Button>
        ))}
      </div>
      <VerticalSlider sliders={newData} currentPoint={currentPoint} getValueByLanguage={getValueByLanguage}/>
    </div>
  );
};
