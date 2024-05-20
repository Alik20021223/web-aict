import { t } from "i18next";
import { ActivityBlock } from "../../pages/Main/_components/activityBlock";
import { Link } from "react-router-dom";
import { activity } from "../../pages/Main/_components/VerticalSlider/types";
import React from "react";

interface ActivityApp {
  data: activity[];
}

export const Activity: React.FC<ActivityApp> = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h1 className="font-bold xl:text-4xl 2xl:text-5xl max-sm:text-lg max-lg:text-2xl max-md:text-xl text-foreground lg:text-3xl">{t("activityAIDT")}</h1>
        <Link to="/activity" className="text-primary  font-semibold">
          <span className="max-sm:hidden 2xl:text-2xl max-xl:text-base xl:text-lg max-sm:sm font-Manrope">{t('moreInfo')}</span>
          <span className="max-sm:block hidden sm font-Manrope">{t("more")}</span>
        </Link>
      </div>
      <ActivityBlock data={data} />
    </div>
  );
};
