
const Herosection = () => {
  return (
    <div className="py-6 pl-4 pr-6 lg:py-14 lg:px-11 flex flex-col bg-grey border-2 border-border-grey rounded-lg gap-10 lg:gap-20">

      <div className="flex lg:justify-between flex-col-reverse lg:flex-row lg:items-center gap-y-4">
        <p className="text-dimmed-white text-base lg:text-2xl">UI/UX Designer</p>

        <div className="flex lg:justify-center items-center bg-dark-grey border-2 border-border-grey rounded-full px-4 py-1 w-fit gap-2">
          <svg className=" animate-ping " xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="4.5" cy="4.5" r="4.5" fill="#E63E21" />
          </svg>

          <p className="text-dimmed-white text-xs">
            AVAILABLE FOR JOB
          </p>
        </div>
      </div>


      <div className="flex flex-col-reverse gap-y-8 lg:gap-y-0 lg:flex-row justify-between">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl lg:text-4xl">I'm Oussama Zriouile</h1>
            <p className="text-dimmed-white lg:text-xl max-w-72">I build front-end and backend web applications</p>
          </div>

          <div className="flex gap-3.5 justify-start">
            <div className="flex border-2 divide-x-2 divide-dark-grey border-dark-grey items-center">
              <p className="lg:text-base text-xs py-1.5 px-2 bg-primary rounded-l-lg ">Hire Me</p>
              <button className="flex h-full justify-center rounded-r-lg items-center py-1.5 px-2 bg-primary ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M18 12.9985H13V17.9985C13 18.2638 12.8946 18.5181 12.7071 18.7056C12.5196 18.8932 12.2652 18.9985 12 18.9985C11.7348 18.9985 11.4804 18.8932 11.2929 18.7056C11.1054 18.5181 11 18.2638 11 17.9985V12.9985H6C5.73478 12.9985 5.48043 12.8932 5.29289 12.7056C5.10536 12.5181 5 12.2638 5 11.9985C5 11.7333 5.10536 11.479 5.29289 11.2914C5.48043 11.1039 5.73478 10.9985 6 10.9985H11V5.99854C11 5.73332 11.1054 5.47896 11.2929 5.29143C11.4804 5.10389 11.7348 4.99854 12 4.99854C12.2652 4.99854 12.5196 5.10389 12.7071 5.29143C12.8946 5.47896 13 5.73332 13 5.99854V10.9985H18C18.2652 10.9985 18.5196 11.1039 18.7071 11.2914C18.8946 11.479 19 11.7333 19 11.9985C19 12.2638 18.8946 12.5181 18.7071 12.7056C18.5196 12.8932 18.2652 12.9985 18 12.9985Z" fill="white" />
                </svg>
              </button>
            </div>

            <div className="flex divide-x-2 divide-border-grey  items-center border-border-grey border-2 rounded-lg overflow-hidden">
              <p className="lg:text-base text-xs py-1.5 px-2 bg-dark-grey  text-dimmed-white">Copy Email</p>
              <button className="flex h-full justify-center items-center  py-1.5 px-2 bg-dark-grey ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M20.25 3.00049H8.25C8.05109 3.00049 7.86032 3.07951 7.71967 3.22016C7.57902 3.36081 7.5 3.55158 7.5 3.75049V7.50049H3.75C3.55109 7.50049 3.36032 7.57951 3.21967 7.72016C3.07902 7.86081 3 8.05158 3 8.25049V20.2505C3 20.4494 3.07902 20.6402 3.21967 20.7808C3.36032 20.9215 3.55109 21.0005 3.75 21.0005H15.75C15.9489 21.0005 16.1397 20.9215 16.2803 20.7808C16.421 20.6402 16.5 20.4494 16.5 20.2505V16.5005H20.25C20.4489 16.5005 20.6397 16.4215 20.7803 16.2808C20.921 16.1402 21 15.9494 21 15.7505V3.75049C21 3.55158 20.921 3.36081 20.7803 3.22016C20.6397 3.07951 20.4489 3.00049 20.25 3.00049ZM15 19.5005H4.5V9.00049H15V19.5005ZM19.5 15.0005H16.5V8.25049C16.5 8.05158 16.421 7.86081 16.2803 7.72016C16.1397 7.57951 15.9489 7.50049 15.75 7.50049H9V4.50049H19.5V15.0005Z" fill="#C0C0C0" />
                </svg>

              </button>
            </div>
          </div>


        </div>


        <div className="w-32 h-32 p-2 overflow-hidden lg:w-44 lg:h-44 bg-eclipse-fill border-2 rounded-full border-exlipse-stroke">
          {/* <div className="w-full h-full rounded-full bg-cover bg-center bg-[url('./assets/me.jpg')]"></div> */}
        </div>
      </div>


    </div>
  )
}


export default Herosection
