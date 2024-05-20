import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"
import { partnersBlockType } from "../../Partners/_compents/types"

interface PartnersBlockApp {
    data: partnersBlockType,
}

export const MainPartner = ({ data }: PartnersBlockApp) => {

    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)

    return (
        <div className="bg-white shadow-md border-2 max-lg:border-1 border-[#D3D8E3] rounded-md h-full">
            <div className="py-14 px-12 max-lg:py-6 max-lg:px-6 max-md:px-0 w-full  flex justify-center">
                <div className="h-[200px] w-[350px]">
                    <img src={`${urlHosting}/${data.imagePath}`} alt={`${data.titleEn}-img`} className="w-full object-fit rounded-lg h-full max-w-full" />
                </div>
            </div>
        </div>
    )
}
