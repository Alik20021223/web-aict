import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab } from "@nextui-org/react";
import React, { Key, useEffect, useState } from "react";
import { BlogAll } from "./_components/blogAll";
import { useResize } from "../../hook/useWidthSize";
import api from "../../api";

export const Blog = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = ["news", "articles", "interviews"];
  const [selected, setSelected] = React.useState(searchParams.get('filter') || 'all');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(2);


  const { width } = useResize();
  const maxLg = width < 1280 && width > 768;
  const maxMd = width < 768;


  const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

  



  useEffect(() => {
    const pageParam = searchParams.get("page") || 1;
    setCurrentPage(Number(pageParam));

    let apiUrl = "";

    switch (selected) {
      case "all":
        apiUrl = "/blog";
        break;
      default:
        apiUrl = `/${selected}`;
        break;
    }

    api
      .get(`${apiUrl}/per-page/${pageAdaptive}?page=${pageParam}`)
      .then((res) => {
        setData(res.data.data);
        setTotalPage(res.data.last_page)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, searchParams, selected]);

  const handleSelectionChange = (key: Key) => {
    setSelected(key as string);
    if (key === "all") {
      setSearchParams({ filter: key as string, page: "1" }); // Clear all parameters except page if 'all' selected
    } else {
      const params: { [key: string]: string } = { filter: key as string, page: "1" }; // Specify type for params
      setSearchParams(params);
    }
  };

  const handleChangePage = (newPage: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(newPage);
    if (selected === "all") {
      setSearchParams({ filter: selected, page: newPage.toString() });
    } else {
      const params: { [key: string]: string } = { filter: selected, page: newPage.toString() }; // Specify type for params
      setSearchParams(params);
    }
  };



  return (
    <div className="container m-auto sm:px-5 max-sm:px-5 mt-11">
      <div className="space-y-10">
        <h1 className="font-bold text-4xl 2xl:text-5xl">{t("BlogH1")}</h1>
        <div>
          <Tabs
            key="light"
            color="primary"
            selectedKey={selected}
            radius="full"
            variant="light"
            size="lg"
            classNames={{ tab: ["!bg-[#FFFFFF]", "py-5", "px-8", "2xl:py-8", "2xl:px-10", "2xl:text-2xl"] }}
            aria-label="Tabs variants"
            onSelectionChange={handleSelectionChange}
          >
            <Tab key='all' title={t('allFilter')} />
            {categories.map((item) => (
              <Tab key={item} title={t(`${item}Filter`)} />
            ))}
          </Tabs>
        </div>
        <BlogAll data={data} currentPage={currentPage} total={totalPage} handleChangePage={handleChangePage} />
      </div>
    </div>
  );
};

