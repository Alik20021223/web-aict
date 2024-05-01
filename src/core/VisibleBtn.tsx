import { Switch } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { useDispatch } from 'react-redux'
import { handleChangeVisible } from "../state/defState/defSlice"



export const VisibleBtn = () => {

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const classSwitch = {
        base: 'inline-flex flex-row-reverse w-full max-w-md bg-content1  items-center justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-content2  data-[selected=true]:border-primary',
        wrapper: "p-0 h-4 overflow-visible",
        thumb: "w-6 h-6 border-2 shadow-lg group-data-[hover=true]:border-primary group-data-[selected=true]:ml-6 group-data-[pressed=true]:w-7 group-data-[selected]:group-data-[pressed]:ml-4"
    }

    return (
        <Switch classNames={classSwitch} onClick={() => dispatch(handleChangeVisible())}>
            <div>
                {t("visuallyText")}
            </div>
        </Switch>
    )
}
