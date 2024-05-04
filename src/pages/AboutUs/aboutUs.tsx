
import { AboutAgency } from "./_components/aboutAgency"
import api from "../../api"
import { HistoryAgency } from "./_components/historyAgency"
import { PowerAgency } from "./_components/powerAgency"
import { PositionAgency } from "./_components/positionAgency"
import { StructureAgency } from "./_components/structureAgency"
import { PersonalAgency } from "./_components/personalAgency"
import { useEffect, useState } from "react"
import { AboutAgencyType, AboutAgencyTypeLang } from "./_components/types"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"



export const AboutUs = () => {
    const [isData, setData] = useState<AboutAgencyTypeLang>(
        {
            about: '',
            history: '',
            power: '',
            position: '',
            structureCenter: '',
            structureOrganize: ''
        }
    );
    const [isDataPerson, setPersonData] = useState([]);
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aboutResponse = await api.get('about');
                const personalsResponse = await api.get('personals');

                const aboutData = aboutResponse.data;
                const personalsData = personalsResponse.data;
                const about = getDataByLanguage(aboutData);

                setData(about);
                setPersonData(personalsData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    // Функция для получения данных с учетом текущего языка
    const getDataByLanguage = (data: AboutAgencyType) => {
        return {
            about: currentLang.code === 'ru' ? data.aboutRu : currentLang.code === 'en' ? data.aboutEn : data.aboutTj,
            history: currentLang.code === 'ru' ? data.historyRu : currentLang.code === 'en' ? data.historyEn : data.historyTj,
            power: currentLang.code === 'ru' ? data.powerRu : currentLang.code === 'en' ? data.powerEn : data.powerTj,
            position: currentLang.code === 'ru' ? data.positionRu : currentLang.code === 'en' ? data.positionEn : data.positionTj,
            structureCenter: currentLang.code === 'ru' ? data.structureCenterRu : currentLang.code === 'en' ? data.structureCenterEn : data.structureCenterTj,
            structureOrganize: currentLang.code === 'ru' ? data.structureOrganizeRu : currentLang.code === 'en' ? data.structureOrganizeEn : data.structureOrganizeTj,
        };
    };

    return (
        isLoading ? (<div>Loading...</div>) : (<div className="container space-y-[88px] m-auto sm:px-5 max-sm:px-5">
            <AboutAgency data={isData.about} />
            <HistoryAgency data={isData.history} />
            <PowerAgency data={isData.power} />
            <PositionAgency data={isData.position} />
            <PersonalAgency data={isDataPerson} />
            <StructureAgency structureCenter={isData.structureCenter} structureOrganize={isData.structureOrganize} />
        </div >)
    );
};
