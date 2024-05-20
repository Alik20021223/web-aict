import Lottie from "lottie-react";
import LoadingAnimation from "../assets/animations/loading.json";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const LoadingPage: FC<{ children: ReactNode }> = ({ children }) => {
    const loading = useSelector((state: RootState) => state.pages.loadingPage);
    const { t } = useTranslation()

    return (
        <>
            <div className={`z-50 transition-all duration-300 flex flex-col justify-center items-center fixed dark:bg-black bg-white w-full h-full inset-0 ${loading ? 'visible' : 'invisible'}`}>
                <div>

                    <Lottie animationData={LoadingAnimation} loop={false} width={220} />

                </div>
                <h1 className="text-[#53585E] font-normal text-center text-2xl">{t('loadingTxt')}</h1>
            </div>
            {children}
        </>
    );
};
