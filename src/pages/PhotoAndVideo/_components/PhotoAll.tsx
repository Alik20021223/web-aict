import { Pagination } from "@nextui-org/react"
import React from "react"
import { GaleryBlock } from "./types"
import { PhotoBlock } from "./PhotoBlock"

interface PhotoAllApp {
    data: GaleryBlock[],
    total: number,
    currentPage: number,
    handleChangePage: (page: number) => void
}

export const PhotoAll: React.FC<PhotoAllApp> = ({ data, total, currentPage, handleChangePage }) => {

    

    return (

        <div className="flex items-center flex-col space-y-10">
            <div className="grid xl:grid-cols-3 max-xl:grid-cols-2 xl:gap-10 max-xl:gap-8 max-md:gap-0 max-md:grid-cols-1 max-md:space-y-6 h-full">
                {data.map((item) => (
                    <div key={item.id} className="h-full ">
                        <PhotoBlock data={item} />
                    </div>
                ))}
            </div>
            <div>
                <Pagination
                    classNames={{ item: ["bg-white"], prev: ["bg-white"], next: "bg-white" }}
                    showShadow
                    size="lg"
                    loop
                    showControls
                    color="primary"
                    initialPage={1}
                    page={currentPage}
                    total={total}
                    onChange={(page) => handleChangePage(page)}
                />
            </div>
        </div>

    )
}
