import { useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    setScroll(window.scrollY);

    // console.log(scroll);
  });

  return (
    <nav className={`fixed w-full backdrop-blur-lg z-50 h-24 select-none px-4 md:px-8 top-0 bg-black/80 ${scroll >= 30 ? 'bg-black/80 transition-all ease-in' : '' }`}>
      <div className="container  relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <NavLink
            to="/"
            className="flex items-center py-4 space-x-2 font-extrabold md:py-0"
          >
            <span className="flex items-center justify-center size-24 text-white rounded-full">
              <img src="logos/zg_logo1.svg" alt="" />
            </span>
            <span className="text-white max-sm:font-bold max-sm:text-lg">ZaraGroup</span>
          </NavLink>
        </div>
        <div
          className={`top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${
            showMenu ? "flex fixed" : "hidden"
          }`}
        >
          <div className="flex-col max-sm:pb-10 w-full h-auto overflow-hidden bg-black/80 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row backdrop-opacity-40 backdrop-blur-md">
            <NavLink
              to="/"
              className="inline-flex items-center  w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
            >
              <img src="logos/zg_logo.svg" className="w-auto h-10" alt="" />
              <span className="ml-2 text-lg font-bold text-white">ZGroup</span>
            </NavLink>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <NavLink
                to="/"
                className="inline-block w-full py-2 mx-0 ml-6 font-semibold text-left text-xl text-white hover:text-gray-400 hover:underline transition-all md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
              >
                Accueil
              </NavLink>
              <Link
                to="/#apropos"
                className="inline-block w-full py-2 mx-0 text-left text-white text-xl font-semibold md:w-auto md:px-0 md:mx-2 hover:text-gray-400 hover:underline transition-all lg:mx-3 md:text-center"
              >
                Apropos
              </Link>
              <Link
                to="/#mission"
                className="inline-block w-full py-2 mx-0 text-left text-white text-xl font-semibold md:w-auto md:px-0 md:mx-2 hover:text-gray-400 hover:underline transition-all lg:mx-3 md:text-center"
              >
                Misssion
              </Link>
              <NavLink
                to="/services"
                className="inline-block w-full py-2 mx-0 text-left text-white text-xl font-semibold md:w-auto md:px-0 md:mx-2 hover:text-gray-400 hover:underline transition-all lg:mx-3 md:text-center"
              >
                Services
              </NavLink>
             
              <Link
                to="/#contact"
                className="inline-block w-full py-2 mx-0 text-left text-white text-xl font-semibold md:w-auto md:px-0 md:mx-2 hover:text-gray-400 hover:underline transition-all lg:mx-3 md:text-center"
              >
                Contact
              </Link>
             
            </div>
          
          </div>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer md:hidden hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6 text-white text-xl font-semibold"
            style={{ display: showMenu ? "none" : "block" }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className="w-6 h-6 text-white text-xl font-semibold"
            style={{ display: showMenu ? "block" : "none" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
