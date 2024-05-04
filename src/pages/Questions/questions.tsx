import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import api from "../../api"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { QuesType } from "./types"
import { AccordionOpen } from "../../core/icons/AccordionOpen"
import { Recommendation } from "../../widgets/ContactsWidgets/Recomendation"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"



export const Questions = () => {
    const [IsData, setData] = useState<QuesType[]>([])
    const currentLang = useSelector((state: RootState) => state.aict.currentLang)
    const DarkMode = useSelector((state: RootState) => state.aict.DarkMode)

    const { t } = useTranslation()

    useEffect(() => {
        api.get('questions/per-page/10').then(res => {
            setData(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    console.log(IsData);

    const questionsAndAnswers = IsData.map(item => ({
        question: currentLang.code === 'ru' ? item.questionRu : currentLang.code === 'en' ? item.questionEn : item.questionTj,
        answer: currentLang.code === 'ru' ? item.answerRu : currentLang.code === 'en' ? item.answerEn : item.answerTj
    }));

    return (
        <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="px-16 py-14 max-lg:px-8 max-lg:py-7 max-md:px-5 max-md:py-6 bg-white rounded-xl shadow-md max-md:space-y-8">
                <div className="flex justify-between items-start">
                    <div className="space-y-4">
                        <h1 className="font-semibold text-3xl 2xl:text-4xl max-lg:text-2xl">{t('SimilarQuesH1')}</h1>
                        <p className="font-normal text-xl max-lg:text-lg 2xl:text-2xl">{t('QuesDescribe')}</p>
                    </div>
                    {
                        DarkMode ? (<div className="w-[200px] h-[200px] rotate-8">
                            <img src="/img/extraQues.svg" alt="ques-img" className="max-md:hidden object-cover w-full h-full" />
                        </div>) : <img src="/img/quesMini.svg" alt="ques-img" className="max-md:hidden" />
                    }
                </div>
                <div>
                    <Accordion variant="light">
                        {questionsAndAnswers.map((item) => (
                            <AccordionItem classNames={{ indicator: 'rotate-45', title: 'font-semibold text-lg', content: 'py-4 px-6 text-foreground', }} key={item.question} aria-label="Anchor" indicator={<AccordionOpen />} title={item.question}>
                                {item.answer}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="my-16  lg:my-14">
                <Recommendation />
            </div>
        </div>
    )
}
