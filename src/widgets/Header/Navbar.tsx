import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { SelectLanguage } from "../../core/langSelect";
import { useTranslation } from "react-i18next";
import { Tabs } from "./types";

export const NavbarCom = () => {
    const location = useLocation();

    const [activeItem, setActiveItem] = React.useState<string>("main");

    const data = useSelector((state: RootState) => state.aict.HeaderLink);

    const {t} = useTranslation();

    React.useEffect(() => {
        const currentItem = data.find((item: Tabs) => item.link === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.key);
        }
    }, [location, data]);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <Navbar
            className="mb-5 max-lg:hidden "
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-[-10px]",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
                base: [
                    "justify-between",
                    "bg-[#F7F7F7]"
                ],
                wrapper: [
                    "max-w-full",
                    "px-0"
                ]
            }}
        >
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {data.map((item) => (
                    <Link  key={item.key} color="foreground" to={item.link}>
                        <NavbarItem className="2xl:text-xl" isActive={activeItem === item.key}  onClick={() => handleItemClick(item.key)}>
                            {t(item.key)}
                        </NavbarItem>
                    </Link>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <SelectLanguage />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
