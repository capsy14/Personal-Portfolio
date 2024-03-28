import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

import "../styles/about.css"
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-100 mt-45 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px] ml-80">
        <div className="NAVBAR flex justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="heading-name "
            >
              {"\\Capsy/"}
              
            </a>
          </div>
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 mt-0 text-[#00040f] dark:text-[#e1e1e1] ">
            <a href="#about" className=" hover:text-cyan-500 mt-10">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500 mt-10">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-500 mt-10">
              Education
            </a>
            {/* <a href="#projects" className="hover:text-cyan-500 ">
              Projects
            </a> */}
            <a href="#contact" className="hover:text-cyan-500 mt-10">
              Contact
            </a>
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};

export default Navbar;
