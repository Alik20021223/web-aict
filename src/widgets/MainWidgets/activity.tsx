import { t } from "i18next";
import { ActivityBlock } from "../../pages/Main/_components/mainPage/activityBlock";
import { Link } from "react-router-dom";
import { activity } from "../../pages/Main/_components/mainPage/VerticalSlider/types";
import React from "react";

interface ActivityApp {
  data: activity[];
}

export const Activity: React.FC<ActivityApp> = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h1 className="font-bold xl:text-4xl 2xl:text-5xl max-sm:text-lg text-foreground lg:text-2xl">{t("activityAIDT")}</h1>
        <Link to="#" className="text-primary  font-semibold">
          <span className="max-sm:hidden 2xl:text-2xl xl:text-lg lg:text-base max-sm:sm font-Manrope">{t('moreInfo')}</span>
          <span className="max-sm:block hidden sm font-Manrope">{t("more")}</span>
        </Link>
      </div>
      <ActivityBlock data={data} />
    </div>
  );
};
