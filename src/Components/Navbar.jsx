import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-4 max-sm: bg-slate-100">
        <div className="logo">
          <h2 className="text-4xl text-orange-400 max-sm:text-xl">
            <Link to="/"> Cocktails Db</Link>
          </h2>
        </div>
        <div className="flex gap-6  text-xl  text-gray-600 justify-end mx-4 ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-gray-900 " : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-gray-900" : "")}
            to="about"
          >
            About
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
