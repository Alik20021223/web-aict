import { Button } from '@nextui-org/react'

type Props = {
  children: string
  onClick?: () => void;
}

export const ButtonCom = ({ children, onClick }: Props) => {
  return (
    <Button
      className={`bg-greenAict 2xl:px-4 max-sm:text-base 2xl:text-2xl 2xl:py-8 max-md:text-xl max-md:py-7 lg:text-base font-bold text-white rounded-lg w-full`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
