import React from "react"
import { defaultType } from "./type"

interface DetailBlock {
    name: string,
    value: defaultType[],
}

export const DetailBlockInfo: React.FC<DetailBlock> = ({ name, value }) => {
    return (
        <div>
            <h1 className="font-semibold max-lg:text-base text-lg 2xl:text-xl">{name}:</h1>
            <div className="mt-5">
                {value.map((item) => (
                    <div key={item.id} className="font-normal max-lg:text-sm flex text-base 2xl:text-xl text-[#374151]">
                        <span>-</span><p className="ml-2">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
