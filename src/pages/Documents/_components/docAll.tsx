import { documentBlockType } from "./types"
import DocumentBlock from "./documentBlock";
import { Pagination } from "@nextui-org/react";

interface docLawApp {
    data: documentBlockType[];
    total: number,
    currentPage: number,
    handleChangePage: (page: number) => void
}

export const DocAll: React.FC<docLawApp> = ({ data, currentPage, total, handleChangePage }) => {

    console.log(data);


    return (
        <div className="flex justify-center flex-col space-y-10 w-full">
            <div className="rounded-xl shadow-md bg-white">
                <div className="lg:p-[77px] max-lg:p-12 ">
                    <div className="w-full">
                        <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 lg:mb-12 max-lg:mb-10 gap-4 h-full w-full">
                            {data && data.map((item) => (
                                <div key={item.id} className="h-full">
                                    <DocumentBlock data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
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
