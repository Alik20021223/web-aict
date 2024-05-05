import React from "react"
import { blockActivity } from "./types"
import { Image } from "@nextui-org/react"
import { RootState } from "../../../state/store"
import { useSelector } from "react-redux"


interface BlockActivityApp {
    data: blockActivity
}

export const BlockActivity: React.FC<BlockActivityApp> = ({ data }) => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang);


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
        <div>
            <div className="shadow-md bg-white  rounded-xl">
                <div className={`xl:py-28 xl:px-[110px] max-md:h-full max-lg:p-14 max-xl:py-20 max-xl:px-24 flex max-md:flex-col-reverse justify-between ${data.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-[57%] max-md:w-full space-y-12 max-md:mt-10 max-lg:space-y-6">
                        <h1 className="font-bold 2xl:text-5xl max-sm:text-2xl max-lg:text-2xl max-md:text-3xl lg:text-4xl">{data[getValueByLanguage('title')]}</h1>
                        <p className="font-normal text-[#53585E] max-sm:text-base max-lg:text-base max-md:text-lg xl:text-xl 2xl:text-2xl">{data[getValueByLanguage('description')]}</p>
                    </div>
                    <div className="w-[38%] max-md:w-[50%] item max-md:h-[20%] flex justify-center items-center">
                        <Image src={data.iconPath} className="max-w-full h-full object-cover" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}