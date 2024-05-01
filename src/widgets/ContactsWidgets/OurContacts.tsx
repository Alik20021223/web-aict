import { useSelector } from "react-redux"

import { RootState } from "../../state/store"
import { ContactBlockCom } from "../../core/Contacts/ContactBlockCom"
import { useTranslation } from "react-i18next";


export const OurContacts = () => {

  const { t } = useTranslation();
  const ContactData = useSelector((state: RootState) => state.aict.ContactData)

  return (
    <div className='md:bg-white md:shadow-md md:rounded-xl w-full'>
      <div className='p-[50px] max-md:p-0'>
        <h1 className="font-bold text-2xl max-md:text-3xl">{t('ourContactH1')}</h1>
        <div className="flex max-md:flex-col-reverse justify-between mt-[50px] items-center justify-start">
          <div className="flex flex-col w-[45%] max-md:w-full max-md:mt-[35px]">
            <ContactBlockCom data={ContactData} />
          </div>
          <div className='overflow-hidden rounded-xl w-[45%] max-md:w-full '>
            <img src="/img/map.svg" alt="map" className='w-full h-full max-w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
