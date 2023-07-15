import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from '../assets/ms-logo.png'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex  items-center fixed top-0 z-20 bg-primary py-3`}
    >
      <div className="w-full flex justify-between mx-auto max-w-7xl">
        <Link
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-10 object-contain mx-1" style={{borderRadius : '50%' , boxShadow :'4px 1px 7px 1px #915eff'}}  />
          <p className="text-white font-bold cursor-pointer text-[18px] ms-1 my-1">
            Mandeep Singh
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 pt-3">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer hover:text-white text-[18px] font-medium `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 items-center justify-end">
        <img
          src={toggle ? close : menu}
          alt="toggle button"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-1 black-gradient mx-4 my-2 min-w[140px] z-20 rounded-xl`}>
        <ul className="list-none flex justify-end items-start gap-4 flex-col">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[16px] font-poppins font-medium `}
              onClick={() => {setActive(link.title);
                setToggle(!toggle)
              }}
            >
              <a href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
   
    </nav>
  );
};

export default Navbar;
