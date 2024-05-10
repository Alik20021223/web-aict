import { Button } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


export const ErrorBlock = () => {

    const { t } = useTranslation()





    return (
        <div className="bg-white">
            <div className="container mx-auto flex flex-col justify-center  items-center">
                <div className=" max-lg:space-y-5 space-y-10 w-[50%] flex flex-col items-center">
                    <div className="overflow-hidden max-lg:w-[350px] max-lg:h-[350px] w-[550px] h-[550px]">
                        <img src="/img/errorImg.svg" alt="error-404" className="object-cover w-full h-full" />
                    </div>
                    <h1 className="font-semibold text-4xl 2xl:text-5xl max-lg:text-2xl max-md:text-lg">{t('haventPageDescribe')}</h1>
                    <p className="font-normal text-center text-xl 2xl:text-2xl max-lg:text-base max-md:text-sm">{t('haventPageH1')}</p>
                    <Link to='/'>
                        <Button color="primary" className="text-xl 2xl:text-2xl 2xl:px-16 2xl:py-8 max-lg:text-lg max-md:text-base" size="lg">{t('backToMain')}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
