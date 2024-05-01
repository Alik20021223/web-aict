import { ContactApp } from "./type"


export const ContactBlockCom: React.FC<ContactApp> = ({ data }) => {

    return (
        <div className="space-y-10">
            {data.map((item) => (
                <div className="flex space-x-5" key={item.id}>
                    <div className="">
                        <img src={item.img.url} alt={item.img.alt} />
                    </div>
                    <a href={item.link}>
                        <h1 className="font-semibold text-lg">{item.value}</h1>
                        <p className="font-normal text-base text-[#53585E]">{item.describe}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}
