import { ExpandLess } from "@mui/icons-material";
import { ButtonCom } from '../core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ExtraQuestion = () => {

    const {t} = useTranslation();

    return (
        <div className='container m-auto sm:px-5 w-full'>
            <div className='my-16  lg:my-14 shadow-md justify-between flex max-lg:flex-col-reverse rounded-3xl  bg-white'>
                <div className='flex py-[70px] max-sm:py-8 pl-[70px] lg:py-[50px] lg:pl-[50px] max-lg:px-[30px]  md:py-[30px]  items-start flex-col justify-between'>
                    <div>
                        <h1 className='font-bold 2xl:text-5xl max-sm:text-lg xl:text-4xl lg:text-3xl md:text-2xl '>{t('ExtraQuesH1')}</h1>
                        <p className='font-light 2xl:text-2xl xl:text-xl max-sm:text-sm lg:text-lg md:text-base  mb-[90px] mt-[30px] text-[#777B80]'>{t('ExtraDescribe')}</p>
                    </div>
                    <Link to='/questions' className='font-semibold max-lg:hidden 2xl:text-2xl lg:block xl:text-lg text-primary'>{t('more')}
                        <ExpandLess className="rotate-90 !fill-primary" />
                    </Link>
                    <div className='lg:hidden max-sm:block w-full'>
                        <ButtonCom>{t('learnMore')}</ButtonCom >
                    </div>
                </div>
                <div className='max-lg:w-[50%] max-lg:pt-5 max-lg:m-auto lg:w-[40%] flex justify-center'>
                    <img src='/img/extraQues.webp' className='w-full h-full  object-cover max-w-full' alt="extraQuestionImg" />
                </div>
            </div>
        </div>
    )
}
