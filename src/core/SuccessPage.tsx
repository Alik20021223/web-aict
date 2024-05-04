import { Button } from "@nextui-org/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface successApp {
    link: string,
    btnTxt: string,
}

export const SuccessPage: React.FC<successApp> = ({link, btnTxt}) => {

    const {t} = useTranslation()

    return (
        <div className="container m-auto sm:px-5 max-sm:px-5">
            <div className="md:bg-white md:dark:bg-dark md:shadow-md w-full rounded-xl">
                <div className="flex  flex-col items-center justify-center py-[50px]">
                    <div className="flex flex-col items-center">
                        <div className="w-4/5 max-md:w-full text-center flex flex-col items-center">
                            <h1 className="font-bold mb-[30px] text-3xl">{t('successRequestSend')}</h1>
                            <p className="text-normal  text-lg text-[#374151]">{t('successRequestDescribe')}</p>
                        </div>
                        <img src="/img/succesImg.svg" className="my-[50px]" alt="success-img" />
                        <Link to={link} className="w-4/5 max-md:w-full">
                            <Button className="w-full" color="primary" size="lg" radius="lg">
                                {t(btnTxt)}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
