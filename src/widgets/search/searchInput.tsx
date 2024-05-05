import { Input, Listbox, ListboxItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "../../core/icons/SearchIcon";
import { useEffect, useState } from "react";
import api from "../../api";
import ListboxWrapper from "./listBoxWrapper";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface SearchInputProps {
    placeholder: string;
    type?: string;
}

type FindBlock = {
    id: number;
    titleTj: string;
    titleRu: string;
    titleEn: string;
    descriptionTj: string;
    descriptionRu: string;
    descriptionEn: string;
    slug: string;
    filePathTj: string;
    filePathRu: string;
    filePathEn: string;
    arrayName: string;
    [key: string]: any;
}

type VacancyApp = {
    vacancies: FindBlock[];
}

type DocumentApp = {
    documents: FindBlock[];
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, type }) => {
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const urlHosting = useSelector((state: RootState) => state.aict.urlHosting);
    const { t } = useTranslation();
    const [value, setValue] = useState<string>("");
    const [data, setData] = useState<{ [key: string]: FindBlock[] }>({});
    const [dataVacancy, setDataVacancy] = useState<VacancyApp>({ vacancies: [] });
    const [dataDocuments, setDataDocuments] = useState<DocumentApp>({ documents: [] });
    const [clear, setClear] = useState<boolean>(false);


    useEffect(() => {
        console.log(type);
        
        const fetchData = async () => {
            try {
                const res = await api.get(`search?q=${value}`);
                const responseData = res.data;
                if (value && !clear) {
                    const filteredData: { [key: string]: FindBlock[] } = {};
                    Object.keys(responseData).forEach(key => {
                        if (Array.isArray(responseData[key]) && responseData[key].length > 0) {
                            let arrayName = key.startsWith('blog/interviews') || key.startsWith('blog/articles') || key.startsWith('blog/news') ? 'blog' : key;
                            filteredData[key] = responseData[key].map((item: FindBlock) => ({
                                ...item,
                                arrayName: arrayName,
                            }));
                        }
                    });
                    setData(filteredData);
                    if (type === 'vacancy') {
                        if (Array.isArray(responseData.vacancies) && responseData.vacancies.length > 0) {
                            setDataVacancy({ vacancies: responseData.vacancies.map((item: FindBlock) => ({ ...item, arrayName: 'vacancies' })) });
                        }
                    } else if (type === 'document') {
                        
                        if (Array.isArray(responseData.documents) && responseData.documents.length > 0) {
                            setDataDocuments({ documents: responseData.documents.map((item: FindBlock) => ({ ...item, arrayName: 'documents' })) });
                        }
                    }
                } else {
                    setData({});
                    setDataVacancy({ vacancies: [] });
                    setDataDocuments({ documents: [] });
                }
            } catch (error) {
                console.log(error);
            }
        };
        if(value) {
            fetchData();
        }
        
    }, [value, clear, type]);

    const handleDownload = (filePath: string, title: string) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = `${urlHosting}/${filePath}`;
        downloadLink.setAttribute("download", title);
        downloadLink.click();
        downloadLink.remove();
    };

    // console.log(dataDocuments);
    

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
        <div className="space-y-5">
            <Input
                isClearable
                type="text"
                color='primary'
                variant="bordered"
                size="lg"
                value={value}
                placeholder={t(placeholder)}
                onClear={() => setClear(true)}
                onValueChange={setValue}
                className="max-w-full"
                classNames={{
                    inputWrapper: ['max-sm:h-[60px]', 'max-sm:min-h-0'],
                    input: ['text-foreground text-base'],
                    clearButton: ['text-foreground']
                }}
                startContent={<SearchIcon />}
            />
            {(type !== 'vacancy' && type !== 'document') && Object.keys(data).length > 0 && (
                <ListboxWrapper>
                    <Listbox aria-label="Actions">
                        {Object.keys(data).flatMap((key) => (
                            data[key].map((item) => (
                                <ListboxItem key={item.id} color="primary">
                                    <Link to={`/${item.arrayName}`}>
                                        <h4 className="text-black dark:text-white">{item[getValueByLanguage('title')]}</h4>
                                    </Link>
                                </ListboxItem>
                            ))
                        ))}
                    </Listbox>
                </ListboxWrapper>
            )}
            {type === 'vacancy' && dataVacancy.vacancies.length > 0 && (
                <ListboxWrapper>
                    <Listbox aria-label="Actions">
                        {dataVacancy.vacancies.map((item) => (
                            <ListboxItem key={item.id} color="primary">
                                <Link to={`/${item.arrayName}/${item.slug}`}>
                                    <h4 className="text-black dark:text-white">{item[getValueByLanguage('title')]}</h4>
                                </Link>
                            </ListboxItem>
                        ))}
                    </Listbox>
                </ListboxWrapper>
            )}
            {type === 'document' && dataDocuments.documents.length > 0 && (
                <ListboxWrapper>
                    <Listbox aria-label="Actions">
                        {dataDocuments.documents.map((item) => (
                            <ListboxItem key={item.id} color="primary">
                                <div onClick={() => handleDownload(item[getValueByLanguage('filePath')], item[getValueByLanguage('title')])}>
                                    <h4 className="text-black dark:text-white">{item[getValueByLanguage('title')]}</h4>
                                </div>
                            </ListboxItem>
                        ))}
                    </Listbox>
                </ListboxWrapper>
            )}
        </div>
    );
};

export default SearchInput;
