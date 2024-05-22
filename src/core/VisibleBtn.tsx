
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeBg, handleChangeLang, handleChangeText } from "../state/defState/defSlice"
import { Button, Popover, PopoverTrigger, PopoverContent, Slider, Switch } from "@nextui-org/react"
import { SettingIcon } from "./icons/settingIcon"
import { SunIcon } from "./icons/SunIcon"
import { MoonIcon } from "./icons/MoonIcon"
import { RootState } from "../state/store"
import { lang } from "./langSelect"
import { useState } from "react"

interface VisibleBtnApp {
    header?: boolean
}

export const VisibleBtn = ({ header }: VisibleBtnApp) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const DarkMode = useSelector((state: RootState) => state.aict.DarkMode);
    const sizeText = useSelector((state: RootState) => state.aict.sizeText);
    const languages = useSelector((state: RootState) => state.aict.languages)
    const currentLangState = useSelector((state: RootState) => state.aict.currentLang)
    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const currentLangLocal = languages.find((item) => item.code === localStorage.getItem('i18nextLng'))
    const [currentLang, setCurrentLang] = useState<lang>(
        currentLangLocal ? currentLangLocal : currentLangState
    )

    const handleChangeLanguage = (lang: lang) => {
        i18n.changeLanguage(lang.code)
        dispatch(handleChangeLang(lang))
        setCurrentLang(lang)
    }

    return (
        <>
            <Popover classNames={{ content: `${DarkMode ? "bg-dark" : "bg-white"}` }} placement="bottom-start" >
                <PopoverTrigger>
                    {header ? <Button
                        startContent={<SettingIcon />}
                        variant="bordered"
                        className="px-0 min-w-10"
                    />
                        : <Button
                            startContent={<SettingIcon />}
                            variant="bordered"
                            className="w-full"
                        >
                            {t('settingWeb')}
                        </Button>}
                </PopoverTrigger>
                <PopoverContent className="space-y-5 p-5 max-md:w-full flex flex-col items-start">
                    <Slider
                        label={t('SizeText')}
                        showTooltip={true}
                        step={0.25}
                        formatOptions={{ style: "percent" }}
                        maxValue={1}
                        value={sizeText}
                        onChange={(value) => dispatch(handleChangeText(value))}
                        minValue={0}
                        defaultValue={0}
                        classNames={{ label: `${DarkMode ? 'text-white' : 'text-foreground'}`, value: `${DarkMode ? 'text-white' : 'text-foreground'}` }}
                        className="max-w-md dark:text-white " />

                    <Switch
                        size="md"
                        color="primary"
                        isSelected={DarkMode}
                        onValueChange={() => dispatch(handleChangeBg())}
                        startContent={<MoonIcon />}
                        endContent={<SunIcon />}
                        classNames={{ label: `${DarkMode ? 'text-white' : 'text-foreground'}` }}
                    >
                        {t('DarkMode')}
                    </Switch>
                    <div className='border-2 mt-5 rounded-xl bg-white  w-full'>
                        <div className='p-1 flex justify-between w-full'>
                            {languages.map((item) => (
                                <div key={item.code} onClick={() => handleChangeLanguage(item)} className={`w-full transition-all text-center px-3 py-2 ${currentLang.code === item.code ? 'bg-primary text-white' : 'dark:text-white'} rounded-xl`}>{item.code}</div>
                            ))}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}
