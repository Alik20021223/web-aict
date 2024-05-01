import { OurContacts } from '../../widgets/ContactsWidgets/OurContacts'
import { Recommendation } from '../../widgets/ContactsWidgets/Recomendation'

export const Contacts = () => {
    return (
        <div className='m-auto container sm:px-5 max-sm:px-5'>
            <div className='space-y-20 max-md:mt-10'>
                <div>
                    <OurContacts />
                </div>
                <div>
                    <Recommendation />
                </div>
            </div>
        </div>
    )
}
