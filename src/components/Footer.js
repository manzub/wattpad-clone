import {  MoonIcon, SunIcon } from "@heroicons/react/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  return(<React.Fragment>
    <div className="px-20 lg:px-[250px] pb-5 font-sans font-bold text-xs flex items-end justify-between h-[120px] bg-white dark:bg-gray-800" style={{borderBottomWidth:'1px'}}>
      <div className="flex items-center justify-evenly gap-4">
        <NavLink to="/">Paid Stories</NavLink>
        <NavLink to="/">Try Premium</NavLink>
        <NavLink to="/">Write a Story</NavLink>
        <span>|</span>
        <button onClick={() => setTheme(isDarkMode ? 'light' : 'dark')} className="flex items-center">{ isDarkMode ? <SunIcon className="h-3" /> : <MoonIcon className="h-3" /> }Theme</button>
      </div>
      <div className="text-gray-500 flex items-center justify-evenly gap-4">
        <NavLink to="/">Terms</NavLink>
        <NavLink to="/">Help</NavLink>
        <NavLink to="/">&copy; {new Date().getFullYear()} Wattpad</NavLink>
      </div>
    </div>
  </React.Fragment>)
}

export default Footer;