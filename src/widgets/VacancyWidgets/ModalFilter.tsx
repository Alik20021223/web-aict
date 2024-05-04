
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react";
// import { useRef, useState } from "react";
// import { RootState } from "../../state/store";
// import { useSelector } from "react-redux";
// import { FormFields } from "./filterCom";


// interface ModalApp {
//     isOpen: boolean,
//     onOpenChange: () => void,
// }

// export const ModalFilter: React.FC<ModalApp> = ({ isOpen, onOpenChange }) => {
//     const formRef = useRef<HTMLFormElement>(null);

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

//     function handleClear() {
//         if (formRef.current) {
//             location.reload()
//         }
//     }

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const filterVacancy = useSelector(
//         (state: RootState) => state.aict.filterVacancy
//     );

//     return (
//         <div>
//             <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
//                 <ModalContent>
//                     {(onClose) => (
//                         <>
//                             <ModalHeader className="flex flex-col gap-1 border-b-2 border">Фильтр Вакансии</ModalHeader>
//                             <ModalBody>
//                                 <form ref={formRef} onSubmit={handleSubmit}>
//                                     <div className="space-y-12">
//                                         {filterVacancy.map((select) => (
//                                             <div key={select.id}>
//                                                 <Select
//                                                     labelPlacement="outside"
//                                                     label={select.label}
//                                                     placeholder={select.placeholder}
//                                                     classNames={{ label: "!text-[#718096]" }}
//                                                     className="max-w-full rounded-xl font-semibold"
//                                                     selectedKeys={formData[select.value as keyof FormFields] !== "" ? [formData[select.value as keyof FormFields]] : []}
//                                                     name={select.value}
//                                                     onChange={handleChange}
//                                                 >
//                                                     {select.items.map((item) => (
//                                                         <SelectItem key={item.id} value={item.id}>
//                                                             {item.value}
//                                                         </SelectItem>
//                                                     ))}
//                                                 </Select>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <div className="flex flex-col justify-between w-full mt-6">
//                                         <h1 className="font-semibold text-sm text-[#718096]">Зарплата</h1>
//                                         <div className="justify-between mt-3 w-full flex">
//                                             <Input
//                                                 type="text"
//                                                 placeholder="От"
//                                                 className="w-[40%]"
//                                                 name="salaryFrom"
//                                                 onChange={handleChange}
//                                             />
//                                             <Input
//                                                 type="text"
//                                                 placeholder="До"
//                                                 className="w-[40%]"
//                                                 name="salaryTo"
//                                                 onChange={handleChange}
//                                             />
//                                         </div>
//                                     </div>
//                                 </form>
//                             </ModalBody>
//                             <ModalFooter className="flex items-center">
//                                 <Button
//                                     color="primary"
//                                     className="py-4 2xl:px-4 max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
//                                     type="submit"
//                                     onPress={onClose}
//                                 >
//                                     Применить фильтр
//                                 </Button>
//                                 <Button
//                                     className="py-4 bg-grayAict  text-primary 2xl:px-4  max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold  rounded-lg"
//                                     type="submit"
//                                     onPress={handleClear}
//                                 >
//                                     Очистить фильтр
//                                 </Button>
//                             </ModalFooter>
//                         </>
//                     )}
//                 </ModalContent>
//             </Modal>
//         </div>
//     )
// }
