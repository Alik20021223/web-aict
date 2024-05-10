import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useTranslation } from 'react-i18next';
import { ExpandLess } from '@mui/icons-material';
import ModalVisibleBtn from '../../core/ModalVisibleBtn';
import SearchInput from '../search/searchInput';

export const HeaderMobile = () => {

    const { t, i18n } = useTranslation()

    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [language, setLanguage] = React.useState<string>('ru');
    const data = useSelector((state: RootState) => state.aict.HeaderLink)

    const handleChangeLang = (lang: string) => {

        i18n.changeLanguage(lang)
        setLanguage(lang)

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
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color="foreground"
                                    className={`w-full flex justify-between`}
                                    href={item.link}
                                    size="lg"

                                >
                                    {t(item.key)}
                                    <ExpandLess className='rotate-90 font-normal' />
                                </Link>
                            </NavbarMenuItem>
                        ))}
                        <div className='border-b-2 pt-2'></div>
                        <div className='pt-[25px]'>
                            <h1 className='font-normal text-xl text-[#73787D]'>Выбор языка</h1>
                            <div className='border-2 mt-5 rounded-xl bg-white  w-full'>
                                <div className='p-1 flex justify-between w-full'>
                                    <div onClick={() => handleChangeLang('ru')} className={`w-full transition-all text-center px-6 py-2.5 ${language === 'ru' ? 'bg-primary text-white' : 'dark:text-white'} rounded-xl`}>Русский</div>
                                    <div onClick={() => handleChangeLang('tj')} className={`w-full transition-all text-center px-6 py-2.5 ${language === 'tj' ? 'bg-primary text-white' : 'dark:text-white'} rounded-xl`}>Тоҷикӣ</div>
                                    <div onClick={() => handleChangeLang('en')} className={`w-full transition-all text-center px-6 py-2.5 ${language === 'en' ? 'bg-primary text-white' : 'dark:text-white'} rounded-xl`}>English</div>
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
