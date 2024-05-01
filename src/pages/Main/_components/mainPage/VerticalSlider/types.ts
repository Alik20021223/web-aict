import { ReactNode } from "react";

export type TVerticalSliderProps = {
  currentPoint: number;
  sliders: TVerticalSliderItem[]
}

export type TVerticalSliderItem = {
  title: string;
  content: ReactNode;
  action?: () => void
}