import React, { useState } from "react";
import "./Nav.css";
import logo from "../Navbar/images.png";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between px-6 lg:px-16 shadow-md items-center">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="">
        <ul
          className={`flex flex-col duration-700 lg:flex-row items-center text-xl gap-4 absolute text-black ${
            open ? "top-[100px] text-center" : "-top-60 "
          } md:static`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>

      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <BiX className="text-3xl "></BiX>
        ) : (
          <BiMenu className="text-3xl "></BiMenu>
        )}
      </div>
      
    </div>
  );
};

export default Nav;
