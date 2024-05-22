import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Tabs, Tab } from "@nextui-org/react";
import React, { Key, useEffect, useState } from "react";
import { useResize } from "../../hook/useWidthSize";
import api from "../../api";
import { EventsAll } from "./_components/eventsAll";
import { ErrorBlock } from "../../core/Error";
import { useDispatch } from "react-redux";
import { setLoadingPage } from "../../state/pagesSlice";

export const Events = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = React.useState(searchParams.get('filter') || 'all');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [errorPage, setError] = useState<boolean>(false);
  const [totalPage, setTotalPage] = React.useState<number>(1);



  const { width } = useResize();
  const maxLg = width < 1280 && width > 768;
  const maxMd = width < 768;

  const dispatch = useDispatch()


  const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

  useEffect(() => {
    dispatch(setLoadingPage(true));

    api.get('events/years')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        dispatch(setLoadingPage(false));
      });
  }, []);



  useEffect(() => {
    const pageParam = searchParams.get("page") || 1;
    setCurrentPage(Number(pageParam));

    let apiUrl = "";

    switch (selected) {
      case "all":
        apiUrl = `/events/per-page/${pageAdaptive}?page=${pageParam}`;
        break;
      default:
        apiUrl = `/events/per-page/${pageAdaptive}/${selected}?page=${pageParam}`;
        break;
    }

    api
      .get(apiUrl)
      .then((res) => {
        setData(res.data.data);
        setTotalPage(res.data.last_page)
      })
      .catch(() => {
        setError(true);
      });
  }, [currentPage, searchParams, selected]);


  const handleSelectionChange = (key: Key) => {
    setSelected(key as string);

    setSearchParams({ filter: key as string, page: "1" });
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
    errorPage ? <ErrorBlock /> : <div className="container m-auto sm:px-5 max-sm:px-5 mt-11">
      <div className="space-y-10">
        <h1 className="font-bold text-4xl 2xl:text-5xl">{t("events")}</h1>
        <div className="overflow-auto">
          <Tabs
            key="light"
            color="primary"
            selectedKey={selected}
            radius="full"
            variant="light"
            size="lg"
            classNames={{ tab: ["!bg-[#FFFFFF]", "py-5", "px-8", "2xl:py-8", "2xl:px-10", "2xl:text-2xl"], tabList: ['max-md:grid', 'max-md:grid-cols-2', 'max-md:overflow-x-visible'] }}
            aria-label="Tabs variants"
            onSelectionChange={handleSelectionChange}
          >
            <Tab key='all' title={t('allFilter')} />
            {categories.map((item) => (
              <Tab key={item} title={item} />
            ))}
          </Tabs>
        </div>
        <EventsAll data={data} total={totalPage} currentPage={currentPage} handleChangePage={handleChangePage} />
      </div >
    </div >
  );
};

