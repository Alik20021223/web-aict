
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRef, useState } from "react";
import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { FormFields } from "./filterCom";
import { handleChangeFilter, handleCleanFilter } from "../../state/defState/defSlice";
import { useTranslation } from "react-i18next";
import { BlockTypeOffer } from "../../pages/Vacancy/_components/type";


interface ModalApp {
    isOpen: boolean,
    onOpenChange: () => void,
    city: BlockTypeOffer[],
    industries: BlockTypeOffer[],
    schedules: BlockTypeOffer[],
    experiences: BlockTypeOffer[],
}

export const ModalFilter: React.FC<ModalApp> = ({ isOpen, onOpenChange, city, industries, schedules, experiences }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const currentLang = useSelector(
        (state: RootState) => state.aict.currentLang
    );
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState<FormFields>({
        cityId: 0,
        experienceId: 0,
        scheduleId: 0,
        industryId: 0,
        salaryFrom: 0,
        salaryTo: 0,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(handleChangeFilter(formData))
    };

    function handleClear() {
        if (formRef.current) {
            setFormData(
                {
                    cityId: 0,
                    experienceId: 0,
                    scheduleId: 0,
                    industryId: 0,
                    salaryFrom: 0,
                    salaryTo: 0,
                }
            )
            formRef.current.reset()
            dispatch(handleCleanFilter())
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getValueByLanguage = (field: string) => {
        switch (currentLang.code) {
            case "ru":
                return field + "Ru";
            case "en":
                return field + "En";
            case "tj":
                return field + "Tj";
            default:
                return field;
        }
    };

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 border-b-2 border">{t('filterVacancy')}</ModalHeader>
                            <ModalBody>
                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <div className="space-y-12">
                                        <div>
                                            <Select
                                                labelPlacement="outside"
                                                label={t('city')}
                                                placeholder={t('selectCity')}
                                                classNames={{ label: "text-foreground", selectorIcon: 'text-foreground' }}
                                                className="max-w-full rounded-xl font-semibold"
                                                selectedKeys={formData.cityId !== 0 ? [formData.cityId] : []}
                                                name='city'
                                                onChange={handleChange}
                                            >
                                                {city.map((item) => (
                                                    <SelectItem key={item.id} value={item.id} className="dark:text-foreground">
                                                        {item[getValueByLanguage('title')]}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div>
                                            <Select
                                                labelPlacement="outside"
                                                label={t('experiences')}
                                                placeholder={t('SelectExperiense')}
                                                classNames={{ label: "text-foreground", selectorIcon: 'text-foreground' }}
                                                className="max-w-full rounded-xl font-semibold"
                                                selectedKeys={formData.experienceId !== 0 ? [formData.experienceId] : []}
                                                name='experiences'
                                                onChange={handleChange}
                                            >
                                                {experiences.map((item) => (
                                                    <SelectItem key={item.id} value={item.id} className="dark:text-foreground">
                                                        {item[getValueByLanguage('title')]}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div>
                                            <Select
                                                labelPlacement="outside"
                                                label={t('graphic')}
                                                placeholder={t('SelectGraphic')}
                                                classNames={{ label: "text-foreground", selectorIcon: 'text-foreground' }}
                                                className="max-w-full rounded-xl font-semibold"
                                                selectedKeys={formData.scheduleId !== 0 ? [formData.scheduleId] : []}
                                                name='schedules'
                                                onChange={handleChange}
                                            >
                                                {schedules.map((item) => (
                                                    <SelectItem key={item.id} value={item.id} className="dark:text-foreground">
                                                        {item[getValueByLanguage('title')]}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div>
                                            <Select
                                                labelPlacement="outside"
                                                label={t('activity')}
                                                placeholder={t('SelectType')}
                                                classNames={{ label: "text-foreground", selectorIcon: 'text-foreground' }}
                                                className="max-w-full rounded-xl font-semibold"
                                                selectedKeys={formData.industryId !== 0 ? [formData.industryId] : []}
                                                name='industries'
                                                onChange={handleChange}
                                            >
                                                {industries.map((item) => (
                                                    <SelectItem key={item.id} value={item.id} className="dark:text-foreground">
                                                        {item[getValueByLanguage('title')]}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between w-full mt-6">
                                        <h1 className="font-semibold text-sm text-[#718096]">{t('salaryH1')}</h1>
                                        <div className="justify-between mt-3 w-full flex">
                                            <Input
                                                type="text"
                                                placeholder={t('from')}
                                                className="w-[40%]"
                                                name="salaryFrom"
                                                onChange={handleChange}
                                            />
                                            <Input
                                                type="text"
                                                placeholder={t('to')}
                                                className="w-[40%]"
                                                name="salaryTo"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter className="flex items-center">
                                <Button
                                    color="primary"
                                    className="py-4 2xl:px-4 max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
                                    type="submit"
                                    onPress={onClose}
                                >
                                    {t("applyFilter")}
                                </Button>
                                <Button
                                    className="py-4 bg-grayAict  text-primary 2xl:px-4  max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
                                    type="submit"
                                    onPress={handleClear}
                                >
                                    {t("cleanFilter")}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
