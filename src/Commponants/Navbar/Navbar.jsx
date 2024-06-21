import React, { useState } from "react";
import Logo from "../../Image/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";

const navbarItem = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/about",
    name: "About",
  },
  {
    id: 3,
    link: "/project",
    name: "Projects",
  },
  {
    id: 4,
    link: "/contact",
    name: "Contact US",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="h-[70px] bg-[#12123e] flex items-center justify-between sm:px-[120px] px-[20px]">
        {/* Responsive Design */}

        <ul
          className={
            open
              ? "fixed lg:hidden right-0 top-0 w-[40%] h-full  bg-[#12123e] ease-in-out duration-500"
              : "ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 right-[-100%]"
          }
        >
          <div className="py-[20px] rounded-lg sm:px-[60px] px-[10px] border-b border-b-[#ffffff77] flex items-center ">
            <Link to="/">
              <img src={Logo} className="w-[100px]" alt="" />
            </Link>
          </div>
          <div className="flex items-center ">
            <div>
              {navbarItem.map((items) => (
                <li key={items.id} className="mx-[10px] my-[15px]">
                  <NavLink
                    to={items.link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[1.2rem] text-[#31c92c] relative duration-1000 transition-all hover:text-[#31c92c] mx-[10px] navbar-li"
                          : "text-[1.2rem] text-[#ffffff] relative duration-1000 transition-all hover:text-[#31c92c] mx-[10px] navbar-li"
                      }`
                    }
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>
        </ul>
        <div className="flex items-center mx-[20px]">
          <div onClick={onclick} className="mx-[20px] block lg:hidden">
            {open ? (
              <AiOutlineClose size={25} className="text-[#ffffff]" />
            ) : (
              <RiMenu2Line size={25} className="text-[#ffffff]" />
            )}
          </div>
          <Link to="/" className="flex items-center">
            <img src={Logo} className="w-[40px] h-[40px]" alt="" />
            <h1 className="text-[#ffffff] ml-[5px] sm:text-[32px] text-[22px] transition-all duration-700 hover:text-[#31c92c] font-semibold">
              Sunil Sharma
            </h1>
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex items-center justify-evenly">
            {navbarItem.map((items) => (
              <li key={items.id}>
                <NavLink
                  to={items.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[1.2rem] text-[#31c92c] relative duration-1000 transition-all hover:text-[#31c92c] mx-[10px] navbar-li"
                        : "text-[1.2rem] text-[#ffffff] relative duration-1000 transition-all hover:text-[#31c92c] mx-[10px] navbar-li"
                    }`
                  }
                >
                  {items.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
