import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "./icons/SearchIcon";

interface SearchInputApp {
    txt: string,

}

export const SearchInput: React.FC<SearchInputApp> = ({ txt }) => {

    const { t } = useTranslation()

    return (

        <Input
            isClearable
            type="text"
            color='primary'
            variant="bordered"
            size="lg"
            placeholder={t(txt)}
            onClear={() => console.log("input cleared")}
            className="max-w-full"
            classNames={{
                inputWrapper: ['max-sm:h-[60px]', 'max-sm:min-h-0'],
                input: ['text-foreground text-base'],
            }}
            startContent={<SearchIcon />}
        />

    )
}
