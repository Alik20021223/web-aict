import React, { useEffect, useState } from "react"
import api from "../../api"
import { useResize } from "../../hook/useWidthSize";
import { useTranslation } from "react-i18next";
import { PartnersAll } from "./_compents/partnersAll";
import { useSearchParams } from "react-router-dom";



export const Partners = () => {

    const [isData, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [totalPage, setTotalPage] = React.useState<number>(1);

    const { width } = useResize();
    const maxLg = width < 1280 && width > 768;
    const maxMd = width < 768;
    const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

    const { t } = useTranslation()


    useEffect(() => {
        const pageParam = searchParams.get("page") || 1;
        setCurrentPage(Number(pageParam));

        api.get(`partners/per-page/${pageAdaptive}?page=${pageParam}`).then(res => {
            setData(res.data.data)
            setTotalPage(res.data.last_page)
        }
        ).catch(err => console.log(err))
    }, [])

    const handleChangePage = (newPage: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(newPage);
        setSearchParams({ page: newPage.toString() });
    };

    

    return (
        <div className="container m-auto sm:px-5 max-sm:px-5 mt-10">
            <div className="space-y-10">
                <h1 className="font-bold text-4xl">{t('ourPartners')}</h1>
                <PartnersAll data={isData} handleChangePage={handleChangePage} total={totalPage} currentPage={currentPage} />
            </div>
        </div>
    )
}
