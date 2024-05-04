import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { VerticalSlider } from "./VerticalSlider/VerticalSlider";
import { motion } from "framer-motion"
import { ExpandLess, } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useResize } from "../../../../hook/useWidthSize";

export const ActivityBlock = () => {
  const ActivityButtonData = useSelector(
    (state: RootState) => state.aict.ActivityButtonData
  );
  const ActivityBlockData = useSelector(
    (state: RootState) => state.aict.ActivityBlockData
  ).map(activity => ({ title: activity.txt, content: activity.link }));
  const [isActive, setActive] = useState<string>(ActivityButtonData[0].name);
  const [currentPoint, setCurrentPoint] = useState<number>(0);

  const navigate = useNavigate();
  const { width } = useResize();

  const handleActive = (active: string, index: number) => {
    const isSmallScreen = width <= 880
    setActive(active);
    setCurrentPoint(index);
    isSmallScreen ? navigate("/#") : null
  };

  return (
    <div className="p-[25px] max-sm:p-4 shadow-md  mt-[40px] flex gap-6 justify-between bg-[#E9EAEF] dark:bg-darkBorder rounded-lg max-h-[450px] 2xl:max-h-[550px] overflow-hidden">
      <motion.div initial={{ x: -1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
        duration: 1,
        delay: 0.25,
      }} className="flex flex-col items-start max-sm:p-4 justify-start w-[32%] md:w-full sm:w-full max-sm:w-full lg:w-[42%] *:mb-[35px] bg-white dark:bg-dark p-[25px] rounded-lg">
        {ActivityButtonData.map((item, i) => (
          <Button
            onClick={() => handleActive(item.name, i)}
            className={`bg-white dark:bg-dark last:mb-0 !px-0 w-full 2xl:py-8 flex justify-between  ${isActive === item.name
              ? "font-semibold text-[#383B43]"
              : "font-medium"
              }`}
            key={item.id}
          >
            <div className="flex items-center">
              <div
                className={`p-2 lg:p-1 sm:mr-2 max-sm:mr-2 2xl:p-4  ${isActive === item.name ? "bg-primary" : "bg-[#EEF1F6] dark:bg-darkBg"
                  } transition duration-300 ease-in-out  rounded-[10px]`}
              >
                <img
                  src={item.icon}
                  className={`${isActive === item.name ? "icon-active" : "icon"} max-w-xl`}
                  alt="icon"
                />
              </div>

              <p className="2xl:text-2xl xl:text-lg md:text-xl lg:text-base dark:text-white">{item.name}</p>
            </div>
            <div className="lg:hidden max-md:block">
              <ExpandLess className="rotate-90 " />
            </div>
          </Button>
        ))}

      </motion.div>
      <VerticalSlider sliders={ActivityBlockData} currentPoint={currentPoint} />
    </div>
  );
};
