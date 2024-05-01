
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { SelectLanguage } from '../core/langSelect'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

    const { t } = useTranslation();
    const dataFooter = useSelector((state: RootState) => state.aict.dataFooter)
    const iconsFooter = useSelector((state: RootState) => state.aict.iconsFooter)


    return (
        <div className=' flex flex-col  bg-[#222222]'>
            <div className='container m-auto sm:px-5 max-md:px-5 pt-[80px] max-sm:pt-12 max-sm:px-5 max-sm:pb-6 sm:pt-12  sm:pb-6 lg:pt-[60px] pb-[36px]'>
                <div className='flex max-sm:flex-col max-md:flex-col justify-between'>
                    <div className='flex flex-col justify-between h-full lg:w-[36%] max-sm:mb-8 sm:mb-8 md:w-[44%]  items-start text-white'>
                        <div>
                            <img src="/img/logoFooter.svg" className='2xl:scale-150' alt="logo-footer" />
                        </div>
                        <div className='mt-4 lg:w-[90%] 2xl:mt-8'>
                            <h1 className='2xl:text-2xl lg:text-base'>{t('companyName').toUpperCase()}</h1>
                        </div>
                        <div className='flex mt-6 max-sm:hidden max-md:hidden  2xl:mt-8 *:mr-4 lg:*:mr-2 2xl:*:mr-6'>
                            {iconsFooter.map((item) => (
                                <Link key={item.txt} to={item.link} className='last:mr-0'>
                                    <img src={item.txt} className='2xl:scale-125' alt={item.alt} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='max-lg:flex-col flex justify-between max-lg:w-[60%] w-[56%] max-sm:w-full max-md:w-full'>
                        {dataFooter.map((item) => (
                            <div key={item.name} className='flex max-lg:hidden lg:block flex-col items-start text-white'>
                                <h1 className='font-bold 2xl:text-2xl text-sm'>{item.name}</h1>
                                <ul className='*:mb-3  '>
                                    {item.values.map((value) => (
                                        <li key={value.txt} className='last:mb-0 first:mt-4'>
                                            <Link to={value.link} className='xl:text-sm lg:text-xs 2xl:text-xl font-normal'>{t(value.txt)}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className='lg:hidden flex h-full  w-full justify-between flex-col'>
                            {dataFooter.map((item) => (
                                <div key={item.name}>
                                    <Dropdown showArrow >
                                        <DropdownTrigger>
                                            <Button
                                                className='w-full justify-between border-b-2 bg-transparent text-white border-white'
                                                radius="none"

                                                endContent={<ExpandMore />}
                                            >
                                                {item.name}
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Static Actions">
                                            {item.values.map((value) => (
                                                <DropdownItem key={value.txt}>
                                                    {value.txt}
                                                    <Link to={value.link}></Link>
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='max-sm:flex max-md:flex items-center mt-8 flex-col hidden'>
                        <div className='text-white'>
                            <SelectLanguage />
                        </div>
                        <div className='flex mt-8  *:mr-4 lg:*:mr-2'>
                            {iconsFooter.map((item) => (
                                <a key={item.txt} href={item.link} className='last:mr-0'>
                                    <img src={item.txt} alt={item.alt} />
                                </a>
                            ))}
                        </div>
                        <p className='text-white mt-4'>
                            © 2024 Copyright
                        </p>
                    </div>
                </div>
                <div className='flex justify-between max-sm:hidden max-md:hidden items-center mt-[72px] border-t-1 border-[#D0D5DD] pt-[24px]'>
                    <p className='text-white max-sm:text-center 2xl:text-xl lg:text-base'>
                        © 2024 Copyright
                    </p>
                    <div className='text-white '>
                        <SelectLanguage pos={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
