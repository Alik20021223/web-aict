import React from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useTranslation } from "react-i18next";
import { Tabs } from "./types";
import { VisibleBtn } from "../../core/VisibleBtn";
import { ExpandMore } from "@mui/icons-material";
import api from "../../api";
import { CategoryType } from "../../pages/Documents/_components/types";
import { setLoadingPage } from "../../state/pagesSlice";
import { ErrorBlock } from "../../core/Error";

export const NavbarCom = () => {
    const location = useLocation();

    const [activeItem, setActiveItem] = React.useState<string>("main");
    const data = useSelector((state: RootState) => state.aict.HeaderLink);
    const currentLang = useSelector((state: RootState) => state.aict.currentLang);
    const [categories, setCategories] = React.useState<CategoryType[]>([]);
    const [errorPage, setError] = React.useState<boolean>(false);

    const { t } = useTranslation();
    const dispatch = useDispatch();

    React.useEffect(() => {
        const currentItem = data.find((item: Tabs) => item.link === location.pathname);
        if (currentItem) {
            setActiveItem(currentItem.key);
        }
    }, [location, data]);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    React.useEffect(() => {
        const fetchCategories = async () => {
            try {
                dispatch(setLoadingPage(false));
                const categoriesResponse = await api.get('documents/categories');
                setCategories(categoriesResponse.data);

            } catch (error) {
                setError(true);
            } finally {
                dispatch(setLoadingPage(false));
            }
        };

        fetchCategories();
    }, []);

    const getValueByLanguage = (field: string) => {
        switch (currentLang.code) {
            case "ru":
                return field + "Ru";
            case "en":
                return field + "En";
            case "tj":
                return field + "Tj";
            default:
                return field + "En";
        }
    };

    if (errorPage) {
        return (<ErrorBlock />)
    }

    return (
        <Navbar
            className="mb-5 max-lg:hidden"

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
                    "data-[active=true]:after:bg-primary",
                    "data-[active=true]:after:rounded-[2px]",
                ],
                base: [
                    "flex",
                    "gap-4",
                    "justify-between",
                    "bg-[#F7F7F7]",
                    "dark:bg-darkBg",
                ],
                wrapper: [
                    "max-w-full",
                    "px-0",
                ]
            }}
        >

            <NavbarContent >
                <NavbarBrand>
                    <Link to='/'>
                        <div className='flex items-center'>
                            <img src='/img/simbal.svg' className='2xl:scale-150' alt="gerb" />
                            <div className='px-3 2xl:px-7 text-xs font-semibold'>
                                <h1 className='2xl:text-xl lg:text-sm xl:text-base text-foreground'>{t(`companyName1`).toUpperCase()}</h1>
                                <h1 className='2xl:text-xl lg:text-sm xl:text-base text-foreground'>{t(`companyName2`).toUpperCase()}</h1>
                            </div>
                            <img src="/img/logo.svg" className='2xl:scale-150' alt="logo" />
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-2.5">
                {data.map((item) =>
                    item.key !== 'Documents' ? (<Link key={item.key} className="text-foreground " to={item.link}>
                        <NavbarItem className="2xl:text-xl text-base" isActive={activeItem === item.key} onClick={() => handleItemClick(item.key)}>
                            {t(item.key)}
                        </NavbarItem>
                    </Link>) : <Dropdown classNames={{content: 'bg-darkBg'}} key={item.key}>
                        <NavbarItem >
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className={`p-0 bg-transparent 2xl:text-xl text-base font-light data-[hover=true]:bg-transparent gap-unit-0 ${activeItem === item.key && `font-medium`}`}
                                    endContent={<ExpandMore className="!text-lg" />}
                                    radius="none"
                                    variant="light"
                                    
                                >
                                    {t(item.key)}
                                    {activeItem === item.key && <div className="h-[2px] bg-primary w-full content-none absolute bottom-0 rounded-[2px]"></div>}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            {categories.map((item) => (
                                <DropdownItem
                                    key={item.id}
                                    onClick={() => handleItemClick(item.key)}
                                    href={`documents?filter=${item.id}&page=1`}
                                    className="text-foreground"
                                >
                                    {/* <Link to={`documents?filter=${item.id}&page=1`}> */}
                                    {item[getValueByLanguage('title')]}
                                    {/* </Link> */}
                                </DropdownItem>

                            ))}
                        </DropdownMenu>
                    </Dropdown>
                )}
            </NavbarContent>
            <NavbarContent className="!flex-grow-0" justify="end">
                <NavbarItem>
                    {/* <SelectLanguage /> */}
                    <VisibleBtn header={true} />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};