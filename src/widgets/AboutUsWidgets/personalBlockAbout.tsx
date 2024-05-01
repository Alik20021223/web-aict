import { useSelector } from "react-redux"
import { personalAgency } from "../../pages/AboutUs/_components/types"
import { RootState } from "../../state/store"

interface PersonalBlockApp {
  data: personalAgency
}

export const PersonalBlockAbout: React.FC<PersonalBlockApp> = ({ data }) => {

  const urlHosting = useSelector((state: RootState) => state.aict.urlHosting)

  return (
    <div>
      <div className="flex max-md:bg-white rounded-xl max-md:p-4 md:border-2">
        <div className="overflow-hidden rounded-l-xl max-md:rounded-xl">
          <img src={`${urlHosting}/${data.imagePath}`} alt={data.fullName} className="object-cover rounded-l-xl w-full h-full max-w-full" />
        </div>
        <div className="flex-col py-[46px] pl-[30px] flex space-y-5">
          <h1 className="font-semibold text-2xl">{data.fullName}</h1>
          <p className="font-normal text-[#8F8F8F] text-base">{data.position}</p>
        </div>
      </div>
    </div>
  )
}
