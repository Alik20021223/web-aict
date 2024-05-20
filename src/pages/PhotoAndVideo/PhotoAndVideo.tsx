import React, { Key, useEffect, useState } from "react"
import api from "../../api"
import { useResize } from "../../hook/useWidthSize";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { PhotoAll } from "./_components/PhotoAll";
import { ErrorBlock } from "../../core/Error";
import { Tab, Tabs } from "@nextui-org/react";
import { setLoadingPage } from "../../state/pagesSlice";
import { useDispatch } from "react-redux";
import { GaleryBlock } from "./_components/types";



export const Gallery = () => {

    const [isData, setData] = useState<GaleryBlock[]>([])
    const [searchParams, setSearchParams] = useSearchParams();
    const categories = ["images", "videos"];
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [selected, setSelected] = React.useState(searchParams.get('filter') || "images");
    const [totalPage, setTotalPage] = React.useState<number>(1);
    const [errorPage, setError] = useState<boolean>(false);
    const { t } = useTranslation()
    const { width } = useResize();
    const dispatch = useDispatch();
    const maxLg = width < 1280 && width > 768;
    const maxMd = width < 768;
    const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

    useEffect(() => {
        const timer = async () => {
            try {
                dispatch(setLoadingPage(true));
                await new Promise(resolve => setTimeout(resolve, 750));
            } finally {
                dispatch(setLoadingPage(false));
            }
        };

        timer();
    }, []);


    useEffect(() => {
        const pageParam = searchParams.get("page") || 1;
        setCurrentPage(Number(pageParam));

        api.get(`${selected}/per-page/${pageAdaptive}?page=${pageParam}`)
            .then(res => {
                const updatedData = res.data.data.map((item: GaleryBlock) => ({
                    ...item,
                    category: selected
                }));
                setData(updatedData);
                setTotalPage(res.data.last_page);
            })
            .catch(() => setError(true));
    }, [currentPage, searchParams, selected]);


    const handleChangePage = (newPage: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(newPage);
        setSearchParams({ page: newPage.toString() });
    };

    const handleSelectionChange = (key: Key) => {
        setSelected(key as string);
        const params: { [key: string]: string } = { filter: key as string, page: "1" };
        setSearchParams(params);
    };


    return (
        errorPage ? <ErrorBlock /> : <div className="container m-auto sm:px-5 max-sm:px-5 mt-10">
            <div className="space-y-10">
                <h1 className="font-bold text-4xl">{t('Gallery')}</h1>
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
                        {categories.map((item) => (
                            <Tab key={item} title={t(`${item}`)} />
                        ))}
                    </Tabs>
                </div>
                <PhotoAll data={isData} handleChangePage={handleChangePage} total={totalPage} currentPage={currentPage} />
            </div>
        </div>
    )
}
