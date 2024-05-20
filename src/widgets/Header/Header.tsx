import { NavbarCom } from './Navbar'
import { HeaderMobile } from './HeaderMobile'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { VisibleBtn } from '../../core/VisibleBtn'
import SearchInput from '../search/searchInput'


export const Header = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className='sm:px-5 m-auto container max-sm:px-5'>
                <HeaderMobile />
                <div className='max-lg:hidden  py-5 flex items-center justify-between'>
                    <div className='flex items-start'>
                        <Link to='/'>
                            <div className='flex items-center'>
                                <img src='/img/simbal.svg' className='2xl:scale-150' alt="gerb" />
                                <div className='px-4 2xl:px-7 text-xs font-semibold'>
                                    <h1 className='2xl:text-xl lg:text-sm xl:text-base text-foreground'>{t(`companyName1`).toUpperCase()}</h1>
                                    <h1 className='2xl:text-xl lg:text-sm xl:text-base text-foreground'>{t(`companyName2`).toUpperCase()}</h1>
                                </div>
                                <img src="/img/logo.svg" className='2xl:scale-150' alt="logo" />
                            </div>
                        </Link>
                    </div>
                    <div className='max-lg:hidden'>
                        <VisibleBtn />
                    </div>
                </div >
                <div className='my-5'>
                    <SearchInput placeholder='SearchForSite' />
                </div>
                <div className=''>
                    <NavbarCom />
                </div>
            </div >
        </>
    )
}
