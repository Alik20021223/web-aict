import Lottie from "lottie-react";
import LoadingAnimation from "../assets/animations/loading.json";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { FC, ReactNode } from "react";

export const LoadingPage: FC<{children: ReactNode}> = ({children}) => {
  const loading = useSelector((state: RootState) => state.pages.loadingPage);

  return (
    <>
        <div className={`z-50 transition-all duration-300 fixed bg-black opacity-50 w-full h-full inset-0 ${loading ? 'visible' : 'invisible'}`}>
            <Lottie animationData={LoadingAnimation} loop={false} />
        </div>
        {children}
    </>
  );
};
