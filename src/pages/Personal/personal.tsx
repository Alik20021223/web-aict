import { useParams } from "react-router-dom"
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { PersonAbout } from "./type";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import api from "../../api";
import { setLoadingPage } from "../../state/pagesSlice";
import { ErrorBlock } from "../../core/Error";


export const Personal = () => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting);
    const [errorPage, setError] = useState<boolean>(false);
    const [data, setData] = useState<PersonAbout>()
    const { t } = useTranslation()
    const { personId } = useParams()

    const dispatch = useDispatch()



    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoadingPage(true))
                // const aboutResponse = await api.get('about');
                const personalsResponse = await api.get(`personals/${personId}`)

                const personalsData = personalsResponse.data;

                setData(personalsData);
            } catch (error) {
                setError(true);
            } finally {
                dispatch(setLoadingPage(false))
            }
        };

        fetchData();
    }, []);



    console.log(personId);

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


    return (
        errorPage ? <ErrorBlock /> : data && <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="bg-white shadow-md rounded-md">
                <div className="p-20 space-y-16">
                    <div className="flex space-x-8">
                        <img src={`${urlHosting}/${data.imagePath ? data.imagePath : 'files/images/1715854216_6645db8836f44.png'}`} alt={data.fullNameEn} className="rounded-md object-cover  w-[320px] h-[430px]" />
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-3xl font-bold">{data[getValueByLanguage('fullName')]}</h1>
                                <p className="text-xl font-normal text-[#8f8f8f]">{data[getValueByLanguage('position')]}</p>
                            </div>
                            <div className="space-y-5 ">
                                <h2 className="font-bold text-2xl text-foreground">{t('allInfoPerson')}</h2>
                                <h3 className="flex font-semibold text-xl text-foreground items-center">
                                    {t('datePerson')}:
                                    <span className="text-lg font-normal text-[#dce0e5] ml-2">{data.bornIn}</span>
                                </h3>
                                <h3 className="flex font-semibold text-xl text-foreground items-center">
                                    {t('placeBorn')}:
                                    <span className="text-lg font-normal text-[#dce0e5] ml-2">{data[getValueByLanguage('address')]}</span>
                                </h3>
                            </div>
                        </div>
                    </div >
                    <div className="space-y-5 text-foreground" dangerouslySetInnerHTML={{ __html: data[getValueByLanguage('description')] }}></div>
                </div >
            </div >
        </div >
    )
}
