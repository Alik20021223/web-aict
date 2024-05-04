
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from 'react-redux'
import { handleChangeBg, handleChangeText } from "../state/defState/defSlice"
import { Button, Popover, PopoverTrigger, PopoverContent, Slider, Switch} from "@nextui-org/react"
import { SettingIcon } from "./icons/settingIcon"
import { SunIcon } from "./icons/SunIcon"
import { MoonIcon } from "./icons/MoonIcon"
import { RootState } from "../state/store"

export const VisibleBtn = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const DarkMode = useSelector((state: RootState) => state.aict.DarkMode);
    const sizeText = useSelector((state: RootState) => state.aict.sizeText);

    return (
        <>
            <Popover classNames={{ content: `${DarkMode ? "bg-dark" : "bg-white"}` }} placement="bottom-start" >
                <PopoverTrigger>
                    <Button
                        startContent={<SettingIcon />}
                        variant="bordered"
                        className="w-full"
                    >
                        {t('settingWeb')}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="space-y-5 p-5 max-md:w-full">
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
                </PopoverContent>
            </Popover>
        </>
    )
}
