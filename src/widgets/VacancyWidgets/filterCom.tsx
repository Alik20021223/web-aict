// import { useRef, useState } from "react";
// import { Button, Input, Select, SelectItem } from "@nextui-org/react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../state/store";
// import { useTranslation } from "react-i18next";

// export interface FormFields {
//     city: string;
//     experience: string;
//     graphic: string;
//     activity: string;
//     salaryFrom: string;
//     salaryTo: string;
// }

// export const FilterCom = () => {
//     const formRef = useRef<HTMLFormElement>(null);

//     const { t } = useTranslation()

//     const [formData, setFormData] = useState<FormFields>({
//         city: "",
//         experience: "",
//         graphic: "",
//         activity: "",
//         salaryFrom: "",
//         salaryTo: "",
//     });

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         let selectedValue = null;
//         console.log(name, value);

//         if (name !== 'salaryTo' && name !== 'salaryFrom') {
//             const select = filterVacancy.find((item) => item.value === name);
//             const selectedItem = select ? select.items.find(item => item.id === parseInt(value)) : null;
//             selectedValue = selectedItem ? selectedItem.value : parseInt(value);
//         } else {
//             selectedValue = value;
//         }
//         console.log(selectedValue);

//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };


//     function handleClear() {
//         if (formRef.current) {
//             setFormData(
//                 {
//                     city: '',
//                     experience: "",
//                     graphic: "",
//                     activity: "",
//                     salaryFrom: "",
//                     salaryTo: "",
//                 }
//             )
//             formRef.current.reset()
//         }
//     }

//     const filterVacancy = useSelector(
//         (state: RootState) => state.aict.filterVacancy
//     );

//     return (
//         <div className="rounded-xl bg-white">
//             <div className="p-6 border-b-2">
//                 <h1 className="text-base font-bold text-[#73787D]">{t('filterVacancy')}</h1>
//             </div>
//             <div className="p-6">
//                 <form ref={formRef} onSubmit={handleSubmit}>
//                     <div className="space-y-12">
//                         {filterVacancy.map((select) => (
//                             <div key={select.id}>
//                                 <Select
//                                     labelPlacement="outside"
//                                     label={select.label}
//                                     placeholder={t(select.placeholder)}
//                                     classNames={{ label: "text-foreground", selectorIcon: 'text-foreground', popoverContent: 'dark:bg-darkBorder', mainWrapper: 'dark:bg-darkBg'}}
//                                     className="max-w-full rounded-xl font-semibold"
//                                     selectedKeys={formData[select.value as keyof FormFields] !== "" ? [formData[select.value as keyof FormFields]] : []}
//                                     name={select.value}
//                                     onChange={handleChange}
//                                 >
//                                     {select.items.map((item) => (
//                                         <SelectItem key={item.id} value={item.id} className="dark:text-foreground">
//                                             {item.value}
//                                         </SelectItem>
//                                     ))}
//                                 </Select>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="flex flex-col justify-between w-full mt-6">
//                         <h1 className="font-semibold text-sm text-[#718096]">{t('salaryH1')}</h1>
//                         <div className="justify-between mt-3 w-full flex">
//                             <Input
//                                 type="text"
//                                 placeholder={t('from')}
//                                 className="w-[40%]"
//                                 name="salaryFrom"
//                                 onChange={handleChange}
//                             />
//                             <Input
//                                 type="text"
//                                 placeholder={t('to')}
//                                 className="w-[40%]"
//                                 name="salaryTo"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="w-full mt-[60px] flex-col flex">
//                         <Button
//                             color="primary"
//                             className="py-4 2xl:px-4 max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
//                             type="submit"
//                         >
//                             {t("applyFilter")}
//                         </Button>
//                         <Button
//                             className="py-4 bg-grayAict  text-primary 2xl:px-4 mt-2.5 max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
//                             onClick={handleClear}
//                         >
//                             {t("cleanFilter")}
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
