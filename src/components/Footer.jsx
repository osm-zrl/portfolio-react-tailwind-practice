const Footer = () => {

  return (
    <div className=" p-0.5 bg-gradient-to-bl
     from-border-grey from-70% to-primary to-95% rounded-lg">

      <div className="flex flex-col-reverse gap-y-3 lg:flex-row  items-center justify-between rounded-lg   lg:p-11 py-6 px-11
        bg-gradient-to-bl  from-grey from-70% to-grey/60
      ">
        <p className="lg:text-2xl text-dimmed-white ">OsmZ@20224</p>
        <ul className="flex space-x-4 ">
          <li className="lg:text-xl text-primary"><a href="#">Twitter</a></li>
          <li className="lg:text-xl text-white"><a href="#">Instagram</a></li>
          <li className="lg:text-xl text-white"><a href="#">Linkedin</a></li>

        </ul>

        <div className="flex lg:justify-center items-center bg-dark-grey border-2 border-border-grey rounded-full px-4 py-1 w-fit gap-2">
          <svg className=" animate-ping " xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="4.5" cy="4.5" r="4.5" fill="#E63E21" />
          </svg>

          <p className="text-dimmed-white text-xs">
            AVAILABLE FOR JOB
          </p>
        </div>
      </div>
    </div>
  )
}



export default Footer;
