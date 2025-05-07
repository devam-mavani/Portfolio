import React from "react";
// import Home from "./Home";
// import About from "./About";

const Navbar = () => {
  return (
    <>
      <section>
        <header className="text-blue-50 flex text-2xl justify-between items-center px-10 py-12">
          <a href="#home" className="px-5 font-bold text-3xl">
            PORTFOLIO
          </a>
          <nav>
            <ul className=" flex flex-row">
              <li>
                <a className="list_ele" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="list_ele" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="list_ele" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Navbar;
