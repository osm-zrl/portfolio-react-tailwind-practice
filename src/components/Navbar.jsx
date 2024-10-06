import { useState } from "react";

const Navbar = ()=>{
  const [menuOpen, setMenuOpen] = useState(false);

  const menutoggle = ()=>{
    setMenuOpen(!menuOpen)
  }

  return(
    <nav>
      <div className="flex justify-start mx-auto max-w-7xl">
        <div className="flex items-center p-2 bg-grey rounded-full border-2 border-border-grey">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M0 11.9149C0 9.79976 1.71465 8.08511 3.82979 8.08511C5.94492 8.08511 7.65957 9.79976 7.65957 11.9149C7.65957 14.03 5.94492 15.7447 3.82979 15.7447C1.71465 15.7447 0 14.03 0 11.9149Z" fill="#F35034"/>
    <path d="M0 20C0 17.8849 1.71465 16.1702 3.82979 16.1702C5.94492 16.1702 7.65957 17.8849 7.65957 20C7.65957 22.1151 5.94492 23.8298 3.82979 23.8298C1.71465 23.8298 0 22.1151 0 20Z" fill="#F35034"/>
    <path d="M0 28.0851C0 25.97 1.71465 24.2553 3.82979 24.2553C5.94492 24.2553 7.65957 25.97 7.65957 28.0851C7.65957 30.2002 5.94492 31.9149 3.82979 31.9149C1.71465 31.9149 0 30.2002 0 28.0851Z" fill="#F35034"/>
    <path d="M8.08511 3.82979C8.08511 1.71465 9.79976 0 11.9149 0C14.03 0 15.7447 1.71465 15.7447 3.82979C15.7447 5.94492 14.03 7.65957 11.9149 7.65957C9.79976 7.65957 8.08511 5.94492 8.08511 3.82979Z" fill="#F35034"/>
    <path d="M8.08511 11.9149C8.08511 9.79976 9.79976 8.08511 11.9149 8.08511C14.03 8.08511 15.7447 9.79976 15.7447 11.9149C15.7447 14.03 14.03 15.7447 11.9149 15.7447C9.79976 15.7447 8.08511 14.03 8.08511 11.9149Z" fill="#F35034"/>
    <path d="M8.08511 20C8.08511 17.8849 9.79976 16.1702 11.9149 16.1702C14.03 16.1702 15.7447 17.8849 15.7447 20C15.7447 22.1151 14.03 23.8298 11.9149 23.8298C9.79976 23.8298 8.08511 22.1151 8.08511 20Z" fill="#F35034"/>
    <path d="M8.08511 28.0851C8.08511 25.97 9.79976 24.2553 11.9149 24.2553C14.03 24.2553 15.7447 25.97 15.7447 28.0851C15.7447 30.2002 14.03 31.9149 11.9149 31.9149C9.79976 31.9149 8.08511 30.2002 8.08511 28.0851Z" fill="#F35034"/>
    <path d="M8.08511 36.1702C8.08511 34.0551 9.79976 32.3404 11.9149 32.3404C14.03 32.3404 15.7447 34.0551 15.7447 36.1702C15.7447 38.2854 14.03 40 11.9149 40C9.79976 40 8.08511 38.2854 8.08511 36.1702Z" fill="#F35034"/>
    <path d="M16.1702 3.82979C16.1702 1.71465 17.8849 0 20 0C22.1151 0 23.8298 1.71465 23.8298 3.82979C23.8298 5.94492 22.1151 7.65957 20 7.65957C17.8849 7.65957 16.1702 5.94492 16.1702 3.82979Z" fill="#F35034"/>
    <path d="M16.1702 11.9149C16.1702 9.79976 17.8849 8.08511 20 8.08511C22.1151 8.08511 23.8298 9.79976 23.8298 11.9149C23.8298 14.03 22.1151 15.7447 20 15.7447C17.8849 15.7447 16.1702 14.03 16.1702 11.9149Z" fill="#F35034"/>
    <path d="M16.1702 20C16.1702 17.8849 17.8849 16.1702 20 16.1702C22.1151 16.1702 23.8298 17.8849 23.8298 20C23.8298 22.1151 22.1151 23.8298 20 23.8298C17.8849 23.8298 16.1702 22.1151 16.1702 20Z" fill="#F35034"/>
    <path d="M16.1702 28.0851C16.1702 25.97 17.8849 24.2553 20 24.2553C22.1151 24.2553 23.8298 25.97 23.8298 28.0851C23.8298 30.2002 22.1151 31.9149 20 31.9149C17.8849 31.9149 16.1702 30.2002 16.1702 28.0851Z" fill="#F35034"/>
    <path d="M16.1702 36.1702C16.1702 34.0551 17.8849 32.3404 20 32.3404C22.1151 32.3404 23.8298 34.0551 23.8298 36.1702C23.8298 38.2854 22.1151 40 20 40C17.8849 40 16.1702 38.2854 16.1702 36.1702Z" fill="#F35034"/>
    <path d="M24.2553 3.82979C24.2553 1.71465 25.97 0 28.0851 0C30.2002 0 31.9149 1.71465 31.9149 3.82979C31.9149 5.94492 30.2002 7.65957 28.0851 7.65957C25.97 7.65957 24.2553 5.94492 24.2553 3.82979Z" fill="#F35034"/>
    <path d="M24.2553 11.9149C24.2553 9.79976 25.97 8.08511 28.0851 8.08511C30.2002 8.08511 31.9149 9.79976 31.9149 11.9149C31.9149 14.03 30.2002 15.7447 28.0851 15.7447C25.97 15.7447 24.2553 14.03 24.2553 11.9149Z" fill="#F35034"/>
    <path d="M24.2553 20C24.2553 17.8849 25.97 16.1702 28.0851 16.1702C30.2002 16.1702 31.9149 17.8849 31.9149 20C31.9149 22.1151 30.2002 23.8298 28.0851 23.8298C25.97 23.8298 24.2553 22.1151 24.2553 20Z" fill="#F35034"/>
    <path d="M24.2553 28.0851C24.2553 25.97 25.97 24.2553 28.0851 24.2553C30.2002 24.2553 31.9149 25.97 31.9149 28.0851C31.9149 30.2002 30.2002 31.9149 28.0851 31.9149C25.97 31.9149 24.2553 30.2002 24.2553 28.0851Z" fill="#F35034"/>
    <path d="M24.2553 36.1702C24.2553 34.0551 25.97 32.3404 28.0851 32.3404C30.2002 32.3404 31.9149 34.0551 31.9149 36.1702C31.9149 38.2854 30.2002 40 28.0851 40C25.97 40 24.2553 38.2854 24.2553 36.1702Z" fill="#F35034"/>
    <path d="M32.3404 11.9149C32.3404 9.79976 34.0551 8.08511 36.1702 8.08511C38.2854 8.08511 40 9.79976 40 11.9149C40 14.03 38.2854 15.7447 36.1702 15.7447C34.0551 15.7447 32.3404 14.03 32.3404 11.9149Z" fill="#F35034"/>
    <path d="M32.3404 20C32.3404 17.8849 34.0551 16.1702 36.1702 16.1702C38.2854 16.1702 40 17.8849 40 20C40 22.1151 38.2854 23.8298 36.1702 23.8298C34.0551 23.8298 32.3404 22.1151 32.3404 20Z" fill="#F35034"/>
    <path d="M32.3404 28.0851C32.3404 25.97 34.0551 24.2553 36.1702 24.2553C38.2854 24.2553 40 25.97 40 28.0851C40 30.2002 38.2854 31.9149 36.1702 31.9149C34.0551 31.9149 32.3404 30.2002 32.3404 28.0851Z" fill="#F35034"/>
          </svg>
        </div>


        <ul className="hidden lg:flex items-center justify-around w-full bg-grey border-2 border-border-grey rounded-full">
          <li className="text-center">
            <a className="font-bold text-primary text-xl uppercase"  href="#">About</a>
          </li>
          <li className="text-center">
            <a className="font-normal text-xl uppercase"  href="#">Portfolio</a>
          </li>
          <li className="text-center">
            <a className="font-normal text-xl uppercase"  href="#">Contact</a>
          </li>
        </ul>

        <ul className="flex py-2.5 px-4 lg:hidden items-center justify-between w-full bg-grey border-2 border-border-grey rounded-full">
          <li className="text-center">
            <a className="font-bold text-primary text-xl uppercase"  href="#">About</a>
          </li>
          <li className="text-center">
            <button onClick={menutoggle} className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 17 12" fill="none">
  <path d="M0.153442 1C0.153442 0.734784 0.258799 0.48043 0.446336 0.292893C0.633872 0.105357 0.888226 0 1.15344 0H15.1534C15.4187 0 15.673 0.105357 15.8605 0.292893C16.0481 0.48043 16.1534 0.734784 16.1534 1C16.1534 1.26522 16.0481 1.51957 15.8605 1.70711C15.673 1.89464 15.4187 2 15.1534 2H1.15344C0.888226 2 0.633872 1.89464 0.446336 1.70711C0.258799 1.51957 0.153442 1.26522 0.153442 1ZM0.153442 6C0.153442 5.73478 0.258799 5.48043 0.446336 5.29289C0.633872 5.10536 0.888226 5 1.15344 5H15.1534C15.4187 5 15.673 5.10536 15.8605 5.29289C16.0481 5.48043 16.1534 5.73478 16.1534 6C16.1534 6.26522 16.0481 6.51957 15.8605 6.70711C15.673 6.89464 15.4187 7 15.1534 7H1.15344C0.888226 7 0.633872 6.89464 0.446336 6.70711C0.258799 6.51957 0.153442 6.26522 0.153442 6ZM0.153442 11C0.153442 10.7348 0.258799 10.4804 0.446336 10.2929C0.633872 10.1054 0.888226 10 1.15344 10H15.1534C15.4187 10 15.673 10.1054 15.8605 10.2929C16.0481 10.4804 16.1534 10.7348 16.1534 11C16.1534 11.2652 16.0481 11.5196 15.8605 11.7071C15.673 11.8946 15.4187 12 15.1534 12H1.15344C0.888226 12 0.633872 11.8946 0.446336 11.7071C0.258799 11.5196 0.153442 11.2652 0.153442 11Z" fill="white"/>
</svg>
            </button>
          </li>
        </ul>

      </div>

      {menuOpen&&<div className="lg:hidden right-0 z-50 w-full fixed">
        <ul className="flex flex-col container mx-auto bg-grey border-2 space-y-4 py-4 border-border-grey rounded-lg">
          <li className="text-center">
            <a className="font-normal text-xl uppercase"  href="#">Portfolio</a>
          </li>
          <li className="text-center">
            <a className="font-normal text-xl uppercase"  href="#">Contact</a>
          </li>
        </ul>
      </div>}
    </nav>
  )
}


export default Navbar;
