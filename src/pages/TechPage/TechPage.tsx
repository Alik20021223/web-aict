

export const TechPage = () => {
  return (
    <div className="container mx-auto sm:px-5 max-sm:px-5 py-5 w-full flex justify-center">
      <div className="flex justify-center items-center flex-col lg:w-1/2 space-y-8">
        <img src="/img/Settings.svg" alt="setting-img" className="object-cover w-full h-full" />
        <h1 className="font-bold text-center max-lg:text-2xl !text-[#343434] text-3xl">Введутся Технические работы</h1>
        <p className="font-normal text-center text-black max-lg:text-lg text-xl">
          В данный момент на сайте ведутся технические работы. Попробуйте вернуться позже
        </p>
      </div>
    </div>
  )
}
