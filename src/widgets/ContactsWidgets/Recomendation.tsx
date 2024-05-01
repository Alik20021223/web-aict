import { Button } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"



export const Recommendation = () => {

    const {t} = useTranslation();

    return (
        <div className='bg-white shadow-md rounded-xl w-full'>
            <div className='px-[65px] max-md:px-10 py-[105px] max-md:py-[60px] flex justify-between items-center'>
                <div className="md:w-[50%]  max-md:w-full">
                    <h1 className="font-bold mb-7 2xl:text-4xl md:text-2xl max-md:text-3xl lg:text-3xl">{t('QuestRecom')}</h1>
                    <p className="font-normal mb-12 2xl:text-xl text-[#777B80] md:text-base lg:text-xl">{t('describeQuestRecom')}</p>
                    <Link to={`/contact/form-help`}>
                        <Button className="rounded-xl lg:w-1/2 sm:w-full max-sm:w-full" color="primary" size="lg">{t('btnQuestRecom')}</Button>
                    </Link>
                </div>
                <div className="md:w-[30%] max-md:hidden">
                    <img src="/img/recomandation.svg" alt="recomendation" className="object-cover 2xl:scale-125 w-full h-full max-h-full" />
                </div>
            </div>
        </div>
    )
}
