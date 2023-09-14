import React from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <>
      <header className="w-full py-5 padding-x absolute z-30">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={129} height={29} />
          </a>
          <ul className="flex-1 flex gap-16 justify-center items-center max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="leading-normal font-mono text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 leading-normal text-lg font-mono font-medium max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger icon" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
