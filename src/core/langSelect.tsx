import { useState } from "react";
// import { HiGlobeAlt } from "react-icons/hi";
import { ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { handleChangeLang } from "../state/defState/defSlice";



export type lang = {
  code: string,
  name: string,
  flag: string,
}

interface LangBlock {
  pos?: boolean
}

export const SelectLanguage = ({ pos }: LangBlock) => {
  const { i18n } = useTranslation();

  const languages = useSelector((state: RootState) => state.aict.languages)
  const currentLang = useSelector((state: RootState) => state.aict.currentLang)
  
  const dispatch = useDispatch()

  const [showLanguageMenu, setShowLanguageMenu] = useState(false);



  const handleLanguageSelect = (language: lang) => {
    if (showLanguageMenu) {
      i18n.changeLanguage(language.code)
      dispatch(handleChangeLang(language))
    }
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="lang-menu relative">
        <div
          className="selected-lang flex items-center justify-between cursor-pointer"
          onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        >
          <img
            src={currentLang.flag}
            alt={currentLang.name}
            className="xl:w-6 md:w-4 md:h-4 w-4 h-4 xl:h-6 lg:w-4 lg:h-4 2xl:w-8 2xl:h-8 mr-2 lg:mr-1  2xl:mr-4 inline-block"
          />
          <span className="font-inter 2xl:text-2xl lg:text-base xl:text-lg font-light">{currentLang.name}</span>
          <ExpandMore
            className={`!transition-transform 2xl:scale-125 2xl:ml-2 !duration-300 ${showLanguageMenu ? "rotate-180" : ""
              }`}
          />
        </div>
        <ul
          className={`absolute z-20 right-0 rounded-xl ${pos ? 'bottom-[30px]' : ''} mt-2 w-36 lg:w-32 2xl:w-48 translate-x-0 bg-white border border-gray-200 rounded shadow-md ${showLanguageMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 hidden -translate-y-2"
            } transition duration-300 ease-in-out`}
          style={{
            opacity: showLanguageMenu ? 1 : 0,
            transform: showLanguageMenu ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {languages.map((language) => (
            <li
              key={language.code}
              className={`px-4 2xl:px-6 py-2 2xl:py-4 2xl:text-2xl rounded-xl  ${i18n.language === language.code ? 'bg-primary hover:bg-gray-100 text-white' : 'hover:bg-gray-100 text-black'}`}
              onClick={() => handleLanguageSelect(language)}
            >
              <img
                src={language.flag}
                alt={language.name}
                className="xl:w-6 xl:h-6 w-4 h-4 lg:w-4 lg:h-4 2xl:w-8 2xl:h-8 mr-2 2xl:mr-4 inline-block"
              />
              <span className="lg:text-sm 2xl:text-lg">{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
