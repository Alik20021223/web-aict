// import React, { useEffect } from "react"
// import { blockActivity } from "./types"
// import { Image } from "@nextui-org/react"
// import api from "../../../api"

// interface BlockActivityApp {
//     data: blockActivity
// }

// export type imgBlock = {
//     img_1: string,
//     img_2: string,
//     img_3: string,
// }

// export const BlockActivity: React.FC<BlockActivityApp> = ({ data }) => {


    

//     const renderBlocksImg = (imgBlocks: imgBlock) => {
//         return (
//             <>
//                 <div className="flex-col gap-8  flex max-md:gap-0">
//                     <div className="rounded-xl">
//                         <Image src={imgBlocks.img_1} alt="image_1" className='object-cover w-full h-full max-w-full' />
//                     </div>
//                     <div className="flex gap-8 max-md:hidden">
//                         <div className="overflow-hidden">
//                             <Image src={imgBlocks.img_2} alt="image_1" className='object-cover w-full h-full max-w-full' />
//                         </div>
//                         <div className="overflow-hidden">
//                             <Image src={imgBlocks.img_3} alt="image_1" className='object-cover w-full h-full max-w-full' />
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     };

//     return (
//         <div>
//             <div className="shadow-md bg-white  rounded-xl">
//                 <div className={`xl:py-28 xl:px-[110px] max-md:h-full max-lg:p-14 max-xl:py-20 max-xl:px-24 flex max-md:flex-col-reverse justify-between ${data.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}>
//                     <div className="w-[57%] max-md:w-full space-y-12 max-md:mt-10 max-lg:space-y-6">
//                         <h1 className="font-bold 2xl:text-5xl max-sm:text-2xl max-lg:text-2xl max-md:text-3xl lg:text-4xl">{data.name}</h1>
//                         <p className="font-normal text-[#53585E] max-sm:text-base max-lg:text-base max-md:text-lg xl:text-xl 2xl:text-2xl">{data.describe}</p>
//                     </div>
//                     {data.blockIcon && (
//                         <div className="w-[38%] max-md:w-[50%] item max-md:h-[20%] flex justify-center items-center">
//                             <Image src={data.blockIcon} className="max-w-full h-full object-cover" alt="icon" />
//                         </div>
//                     )}
//                     {data.imgBlocks && <div className="w-[38%] max-md:w-full max-md:h-[50%]  overflow-hidden flex md:justify-center">
//                         {renderBlocksImg(data.imgBlocks)}
//                     </div>}
//                 </div>
//             </div>
//         </div>
//     )
// }