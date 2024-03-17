import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-4 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <a href="/">
          <img
            src={appleImg}
            alt="apple-logo"
            width={13}
            height={17}
            className="cursor-pointer"
          />
        </a>

        <div className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-xs text-gray-200 transition-all cursor-pointer font-sftext hover:text-white"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search-icon"
            height={15}
            width={15}
            className="opacity-80"
          />
          <img
            src={bagImg}
            alt="bag-icon"
            height={15}
            width={15}
            className="opacity-80"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
