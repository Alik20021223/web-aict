import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Dropdown, NavbarItem, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useTranslation } from 'react-i18next';
import { ExpandLess } from '@mui/icons-material';
import ModalVisibleBtn from '../../core/ModalVisibleBtn';
import SearchInput from '../search/searchInput';
import { lang } from '../../core/langSelect';
import { handleChangeLang } from '../../state/defState/defSlice';
import { setLoadingPage } from '../../state/pagesSlice';
import api from '../../api';
import { CategoryType } from '../../pages/Documents/_components/types';
import { ErrorBlock } from '../../core/Error';

export const HeaderMobile = () => {

    const { t, i18n } = useTranslation()
    const data = useSelector((state: RootState) => state.aict.HeaderLink)
    const languages = useSelector((state: RootState) => state.aict.languages)
    const currentLangState = useSelector((state: RootState) => state.aict.currentLang)
    const [categories, setCategories] = React.useState<CategoryType[]>([]);
    const [errorPage, setError] = React.useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const currentLangLocal = languages.find((item) => item.code === localStorage.getItem('i18nextLng'))
    const [currentLang, setCurrentLang] = useState<lang>(
        currentLangLocal ? currentLangLocal : currentLangState
    )

    const dispatch = useDispatch()

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

    const handleChangeLanguage = (lang: lang) => {
        i18n.changeLanguage(lang.code)
        dispatch(handleChangeLang(lang))
        setCurrentLang(lang)
    }

    if (errorPage) {

        return (
            <ErrorBlock/>
        )
    }


    return (
        <div className='m-auto container lg:hidden'>
            <Navbar shouldHideOnScroll classNames={{ wrapper: ['px-0'], menu: ['dark:bg-dark'] }} onMenuOpenChange={setIsMenuOpen} className='bg-[#f7f7f7] dark:bg-darkBg'>
                <NavbarContent justify='start'>
                    <NavbarBrand>
                        <Link href='/'>
                            <div className='flex items-center'>
                                <div className='border-r-2 2xl:border-r-4 pr-[15px] 2xl:pr-[30px]'>
                                    <img src='/img/simbal.svg' className='2xl:scale-150' alt="gerb" />
                                </div>
                                <div className='flex pl-[15px] 2xl:pl-[30px]'>
                                    <img src="/img/logo.svg" className='2xl:scale-150' alt="logo" />
                                    <div className='ml-[20px] 2xl:ml-[40px] text-xs font-semibold text-wrap'>
                                        <h1 className='text-xl text-black max-sm:text-2xl sm:block lg:hidden'>{t('companyNameShort').toUpperCase()}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden text-foreground"
                    />
                </NavbarContent>
                <NavbarMenu>
                    <div className='mx-auto  container sm:px-5 max-sm:px-5'>
                        <NavbarMenuItem className='mb-5'>
                            <div className='my-2'>
                                <SearchInput placeholder='SearchForSite' />
                            </div>
                            <div className='w-full'>
                                <ModalVisibleBtn />
                            </div>
                        </NavbarMenuItem>
                        {data.map((item, index) => (
                            item.key !== 'Documents' ? <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color="foreground"
                                    className={`w-full flex justify-between`}
                                    href={item.link}
                                    size="lg"

                                >
                                    {t(item.key)}
                                    <ExpandLess className='rotate-90 font-normal' />
                                </Link>
                            </NavbarMenuItem> : <Dropdown classNames={{ content: 'bg-darkBg' }} key={item.key}>
                                <NavbarItem >
                                    <DropdownTrigger>
                                        <Button
                                            disableRipple
                                            className={`p-0 bg-transparent flex justify-between 2xl:text-xl w-full text-base font-light data-[hover=true]:bg-transparent gap-unit-0`}
                                            endContent={<ExpandLess className='rotate-90 font-normal' />}
                                            radius="none"
                                            variant="light"

                                        >
                                            {t(item.key)}
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
                        ))}
                        <div className='border-b-2 pt-2'></div>
                        <div className='pt-[25px]'>
                            <h1 className='font-normal text-xl text-[#73787D]'>{t('Selectlang')}</h1>
                            <div className='border-2 mt-5 rounded-xl bg-white  w-full'>
                                <div className='p-1 flex justify-between w-full'>
                                    {languages.map((item) => (
                                        <div key={item.code} onClick={() => handleChangeLanguage(item)} className={`w-full transition-all text-center px-6 py-2.5 ${currentLang.code === item.code ? 'bg-primary text-white' : 'dark:text-white'} rounded-xl`}>{item.name}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarMenu>

            </Navbar>
            <div className='my-2 hidden'>
                <SearchInput placeholder='SearchForSite' />
            </div>
        </div>
    )
}
