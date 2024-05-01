import { documentBlockType } from "./types"
import DocumentBlock from "./documentBlock";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useResize } from "../../../hook/useWidthSize";
import { useEffect } from "react"
import axios from "axios"

interface docLawApp {
    data: documentBlockType[];
}

export const DocLaw: React.FC<docLawApp> = ({ data }) => {
    const [showAll, setShowAll] = useState(false);
    // const [isData, setData] = useState([]);
    const { t } = useTranslation();
    const { width } = useResize();

    const lg = width <= 1024
    const md = width <= 768



    useEffect(() => {
        axios.get('http://ferma.ru.swtest.ru/api/documents/1').then(res => {
            console.log(res.data);

            // setData(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [showAll]);
    const filteredData = showAll ? data : (lg ? data.slice(0, 6) : (md ? data.slice(0, 4) : data.slice(0, 9)));

    return (
        <div className="rounded-xl shadow-md bg-white">
            <div className="lg:p-[77px] max-lg:p-12 ">
                <h1 className="font-bold max-lg:text-3xl 2xl:text-5xl text-4xl xl:mb-[70px] max-xl:mb-12">{t('lawH1')}</h1>
                <div className="flex flex-col items-center w-full">
                    <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 lg:mb-12 max-lg:mb-10 gap-4">
                        {filteredData.map((item) => (
                            <div key={item.id}>
                                <DocumentBlock data={item} />
                            </div>
                        ))}
                    </div>
                    <div className="w-1/3">
                        {showAll ?
                            <Button size="lg" className="w-full 2xl:text-xl" onPress={() => setShowAll(false)} color="primary">{t('hidden')}</Button>
                            :
                            <Button size="lg" className="w-full 2xl:text-xl" onPress={() => setShowAll(true)} color="primary">{t('ShowAll')}</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
