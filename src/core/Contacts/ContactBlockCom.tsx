import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { ContactBlock } from "./type";

interface ContactApp {
    data: ContactBlock
}


export const ContactBlockCom = ({ data }: ContactApp) => {

    const currentLang = useSelector((state: RootState) => state.aict.currentLang)
    const address = currentLang.code === 'ru' ? data.addressRu : currentLang.code === 'en' ? data.addressEn : data.addressTj;
    const fullAddress = currentLang.code === 'ru' ? data.fullAddressRu : currentLang.code === 'en' ? data.fullAddressEn : data.fullAddressTj;
    const phoneSchedule = currentLang.code === 'ru' ? data.phoneScheduleRu : currentLang.code === 'en' ? data.phoneScheduleEn : data.phoneScheduleTj;
    const emailSchedule = currentLang.code === 'ru' ? data.emailScheduleRu : currentLang.code === 'en' ? data.emailScheduleEn : data.phoneScheduleTj;

    return (
        <div className="space-y-10">
            <div className="flex space-x-5">
                <div className="">
                    <img src='/icons/Place.svg' alt='place-img' />
                </div>
                <a href=''>
                    <h1 className="font-semibold text-lg">{address}</h1>
                    <p className="font-normal text-base">{fullAddress}</p>
                </a>
            </div>
            <div className="flex space-x-5">
                <div className="">
                    <img src='/icons/Phone.svg' alt="phone-img" />
                </div>
                <a href={`tel:${data.phone}`}>
                    <h1 className="font-semibold text-lg">{data.phone}</h1>
                    <p className="font-normal text-base">{phoneSchedule}</p>
                </a>
            </div>
            <div className="flex space-x-5">
                <div className="">
                    <img src='/icons/email-primary.svg' alt='email-img'/>
                </div>
                <a href={`mailto:${data.email}`}>
                    <h1 className="font-semibold text-lg">{data.email}</h1>
                    <p className="font-normal text-base">{emailSchedule}</p>
                </a>
            </div>
        </div>
    )
}
