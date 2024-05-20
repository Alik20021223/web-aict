import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Slider, Switch } from "@nextui-org/react";
import { SettingIcon } from "./icons/settingIcon";
import { useTranslation } from "react-i18next";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { handleChangeBg, handleChangeText } from "../state/defState/defSlice";

export default function ModalVisibleBtn() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const DarkMode = useSelector((state: RootState) => state.aict.DarkMode);
    const sizeText = useSelector((state: RootState) => state.aict.sizeText);

    return (
        <>

            <Button
                startContent={<SettingIcon />}
                variant='light'
                className="w-full dark:bg-darkBorder bg-[#f7f7f7] border-2"
                onPress={onOpen}
            >
                {t('settingWeb')}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="dark:bg-dark">
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-foreground">{t('settingWeb')}</ModalHeader>
                            <ModalBody className="space-y-5">
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
                                    
                                    classNames={{ label: `${DarkMode ? 'text-white' : 'text-foreground'}`, thumb: '!bg-white' }}
                                >
                                    {t('DarkMode')}
                                </Switch>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
