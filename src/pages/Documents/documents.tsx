import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../state/store"
import { useTranslation } from "react-i18next"
import { Key, useEffect, useState } from "react"
import api from "../../api"
import { useResize } from "../../hook/useWidthSize"
import { Tab, Tabs } from "@nextui-org/react"
import { useSearchParams } from "react-router-dom"
import { CategoryType, documentBlockType } from "./_components/types"
import { DocAll } from "./_components/docAll"
import SearchInput from "../../widgets/search/searchInput"
import { setLoadingPage } from "../../state/pagesSlice"
import { ErrorBlock } from "../../core/Error"





export const Documents = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [data, setData] = useState<documentBlockType[]>([]);
    const [selected, setSelected] = useState<string | null>(searchParams.get('filter') || null);
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [errorPage, setError] = useState<boolean>(false);
    const [totalPage, setTotalPage] = useState<number>(1);

    const { width } = useResize();
    const maxLg = width < 1280 && width > 768;
    const maxMd = width < 768;

    const pageAdaptive = maxLg ? 6 : (maxMd ? 4 : 9)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await api.get('documents/categories');
                setCategories(categoriesResponse.data);
                setSelected(searchParams.get('filter') || categoriesResponse.data[0]?.id || null);
            } catch (error) {
                setError(true);
            }
        };

        fetchData();
    }, [searchParams]);

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
        const fetchData = async () => {
            try {
                const res = await api.get(`documents/category/${selected}/per-page/${pageAdaptive}`);
                setData(res.data.data);
                setTotalPage(res.data.last_page)
            } catch (err) {
                setError(true)
            } finally {
            }
        };

        if (selected) {
            fetchData();
        }
    }, [currentPage, selected, searchParams]);

    const handleSelectionChange = (key: Key) => {
        setSelected(key as string);
        setSearchParams({ filter: `${key}`, page: "1" });
    };

    const handleChangePage = (newPage: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(newPage);
        const params: { [key: string]: string } = { filter: `${selected}`, page: newPage.toString() };
        setSearchParams(params);
    };

    if (errorPage) {
        return (
            <ErrorBlock/>
        )
    }

    return (
        <div className="container m-auto space-y-[50px] sm:px-5 max-sm:px-5">
            <h1 className="font-bold text-4xl">{t('Documents')}</h1>
            <div className="w-full">
                <SearchInput placeholder="searchDocuments" type="document" />
            </div>
            <div className="space-y-10">
                <div className="overflow-auto">
                    <Tabs
                        key="light"
                        color="primary"
                        selectedKey={selected}
                        radius="full"
                        variant="light"
                        size="lg"
                        classNames={{ tab: ["!bg-[#FFFFFF]", "py-5", "px-8", "2xl:py-8", "2xl:px-10", "2xl:text-2xl",], tabList: ['flex', 
                        'overflow-x-auto', 
                        'whitespace-nowrap',] }}
                        aria-label="Tabs variants"
                        onSelectionChange={handleSelectionChange}
                    >
                        {categories.map((item) => (
                            <Tab key={item.id} title={currentLang.code === 'ru' ? item.titleRu : currentLang.code === 'en' ? item.titleEn : item.titleTj} />
                        ))}
                    </Tabs>
                </div>
                <div>
                    <DocAll data={data} currentPage={currentPage} total={totalPage} handleChangePage={handleChangePage} />
                </div>
            </div>
        </div>
    )


}

