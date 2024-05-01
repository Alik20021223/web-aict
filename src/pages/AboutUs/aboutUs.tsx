
import { AboutAgency } from "./_components/aboutAgency"

import { HistoryAgency } from "./_components/historyAgency"
import { PowerAgency } from "./_components/powerAgency"
import { PositionAgency } from "./_components/positionAgency"
import { StructureAgency } from "./_components/structureAgency"
import { PersonalAgency } from "./_components/personalAgency"
import { useEffect, useState } from "react"
import api from "../../api"
import { AboutAgencyType } from "./_components/types"


export const AboutUs = () => {
    const [isData, setData] = useState<AboutAgencyType>({
        id: 1,
        about: '',
        history: '',
        power: '',
        position: '',
        structureCenter: '',
        structureOrganize: '',
        created_at: '',
        updated_at: '',
    })

    const [isDataPerson, setPersonData]= useState([])

    useEffect(() => {
        api.get('about').then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
        api.get('personals').then(res => {
            setPersonData(res.data);
            
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className="container space-y-[88px] m-auto sm:px-5 max-sm:px-5">
            <AboutAgency data={isData.about} />
            <HistoryAgency data={isData.history} />
            <PowerAgency data={isData.power} />
            <PositionAgency data={isData.position} />
            <PersonalAgency data={isDataPerson} />
            <StructureAgency structureCenter={isData.structureCenter} structureOrganize={isData.structureOrganize} />
        </div>
    )
}
