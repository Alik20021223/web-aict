import { Pagination } from "@nextui-org/react"
import React from "react"
import { ProjectBlock } from "./projectBlock"
import { projectBlockType } from "./types"


interface projectsAllApp {
    data: projectBlockType[],
    total: number,
    currentPage: number,
    handleChangePage: (page: number) => void
}

export const ProjectsAll: React.FC<projectsAllApp> = ({ data, total, currentPage, handleChangePage }) => {

    return (
        <div className="flex justify-center flex-col space-y-10 items-center">
            <div className="grid xl:grid-cols-3 max-xl:grid-cols-2 xl:gap-10 max-xl:gap-8 max-md:gap-0 max-md:grid-cols-1 max-md:gap-6">
                {data.map((item, i) => (
                    <div key={i} className="h-full">
                        <ProjectBlock data={item} />
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
