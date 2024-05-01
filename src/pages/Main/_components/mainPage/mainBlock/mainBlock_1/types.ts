import {  PropsMainBlock } from "../types"

export type BlockAppTxt = {
    data: PropsMainBlock[],
    currentPoint: number,
    handleNextClick?: () => void,
    handlePrevClick?: () => void,
}