import { ContactBlockCom } from "../../core/Contacts/ContactBlockCom"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import api from "../../api";
import { ContactBlock } from "../../core/Contacts/type";
import { useDispatch } from "react-redux";
import { setLoadingPage } from "../../state/pagesSlice";


export const OurContacts = () => {

  const dispatch = useDispatch()

  const { t } = useTranslation();
  const [data, setData] = useState<ContactBlock>({
    id: 0,
    coordination: '',
    addressTj: '',
    addressRu: '',
    addressEn: '',
    fullAddressTj: '',
    fullAddressRu: '',
    fullAddressEn: '',
    phone: '',
    phoneScheduleTj: '',
    phoneScheduleRu: '',
    phoneScheduleEn: '',
    email: '',
    emailScheduleTj: '',
    emailScheduleRu: '',
    emailScheduleEn: '',
  })


  useEffect(() => {
    api.get('contacts').then(res => {
      dispatch(setLoadingPage(true))
      setData(res.data)
    }).catch(err => console.log(err)).finally(() => {
      dispatch(setLoadingPage(false))
    })
  }, [])

  return (
    <div className='md:bg-white md:dark:bg-dark md:shadow-md md:rounded-xl w-full'>
      <div className='p-[50px] max-md:p-0'>
        <h1 className="font-bold text-2xl max-md:text-3xl">{t('ourContactH1')}</h1>
        <div className="flex max-md:flex-col-reverse justify-between mt-[50px] items-center justify-start">
          <div className="flex flex-col w-[45%] max-md:w-full max-md:mt-[35px]">
            <ContactBlockCom data={data} />
          </div>
          <div className='overflow-hidden rounded-xl w-[45%] max-md:w-full '>
            <img src="/img/map.svg" alt="map" className='w-full h-full max-w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
