import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full mt-5">
      <div className="flex justify-between items-center max-w-[90%] mx-auto h-10">
        {/* Logo */}
        <h1 className="font-medium text-2xl">Sentinal</h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-500 font-medium">
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/features"}>Features</NavLink>
          <NavLink to={"/solutions"}>Solutions</NavLink>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-5 items-center text-gray-500 font-medium">
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink
            to={"/signup"}
            className="px-4 py-2 rounded-2xl bg-[#0056D2] text-white"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-4 text-gray-500 font-medium border-t border-gray-100 mt-2">
          <NavLink to={"/products"} onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to={"/features"} onClick={() => setMenuOpen(false)}>Features</NavLink>
          <NavLink to={"/solutions"} onClick={() => setMenuOpen(false)}>Solutions</NavLink>
          <NavLink to={"/login"} onClick={() => setMenuOpen(false)}>Login</NavLink>
          <NavLink
            to={"/signup"}
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-2xl bg-[#0056D2] text-white"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;