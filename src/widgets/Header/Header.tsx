import { NavbarCom } from './Navbar'
import { HeaderMobile } from './HeaderMobile'
import { SearchInput } from '../../core/searchInput'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { VisibleBtn } from '../../core/VisibleBtn'


export const Header = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className='sm:px-5 m-auto container max-sm:px-5'>
                <HeaderMobile />
                <div className='max-lg:hidden  py-5 flex items-center justify-between'>
                    <div className='flex items-start'>
                        <Link to='/'>
                            <div className='flex  items-center'>
                                <div className='border-r-2 2xl:border-r-4 pr-[15px] 2xl:pr-[30px]'>
                                    <img src='/img/simbal.svg' className='2xl:scale-150' alt="gerb" />
                                </div>
                                <div className='flex pl-[15px] 2xl:pl-[30px]'>
                                    <img src="/img/logo.svg" className='2xl:scale-150' alt="logo" />
                                    <div className='ml-[20px] lg:w-[52%] 2xl:ml-[40px] text-xs font-semibold text-wrap'>
                                        <h1 className='2xl:text-xl lg:text-sm xl:text-base'>{t(`companyName`).toUpperCase()}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='max-lg:hidden'>
                        <VisibleBtn/>
                    </div>
                </div>
                <div className='my-5'>
                    <SearchInput txt='SearchForSite' />
                </div>
                <NavbarCom />
            </div>
        </>
    )
}
