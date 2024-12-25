import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const menuToggle = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      <header className="sticky top-0 z-10 bg-white">
        <div className="max-w-4xl flex justify-between items-center p-4">
          <h1 className="text-lg font-bold uppercase flex items-center justify-center gap-2  text-black">
            <GiBrain className="text-blue-800" size={35} />
            Mental Health <span className="font-bold text-blue-900">+</span>
          </h1>
          <div>
            <button
              onClick={menuToggle}
              className="text-2xl sm:hidden focus:outline-none"
            >
              {isMenu ? <IoClose size={28} /> : <IoMenuSharp size={28} />}
            </button>
            <nav
              className="hidden sm:block mx-auto space-x-8 text-xl"
              aria-label="main"
            >
              {" "}
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/event">Events</a>
              <a href="/resource">Resource Library</a>
            </nav>
          </div>
        </div>{" "}
        {isMenu && (
          <div className="min-h-screen w-full text-white bg-black">
            {" "}
            <nav
              className="lg:hidden md:hidden flex flex-col items-center gap-8 space-x-8 text-xl"
              aria-label="main"
            >
              <ul className="mt-12">
                <li className="my-3">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
