import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
// import { GiBrain } from "react-icons/gi";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const menuToggle = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <header className="sticky top-0 z-10 bg-green-400 text-white">
        <div className="max-w-4xl flex justify-between items-center p-4">

          <img src="/mhslogo.png" className="p-3 h-12 w-42 " alt="Logo" />

          <button
            onClick={menuToggle}
            className="text-2xl sm:hidden focus:outline-none"
          >
            {isMenu ? <IoClose size={28} /> : <IoMenuSharp size={28} />}
          </button>
          <div>

            <nav
              className="hidden sm:block mx-auto basis-1/2 sm:text-lg space-x-8 text-xl"
              aria-label="main">
              {" "}
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/service">Our Services</a>
              <a href="/library"> Library</a>
            </nav>
          </div>
        </div>{" "}
        {isMenu && (
          <div className="sm:hidden min-h-screen w-full text-white bg-emerald-950 transition-colors ease-linear duration-100">
            <div className="bg-slate-800 transition-colors ease-linear duration-300 min-h-screen w-80">
              <div className="grid grid-cols-1">
                <ul className="text-center">
                  <li className="">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <nav
              className="lg:hidden md:hidden flex flex-col items-center gap-8 space-x-8 text-xl"
              aria-label="main"
            ></nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;