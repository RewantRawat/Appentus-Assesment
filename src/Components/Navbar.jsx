import React from "react";
import { FaAndroid, FaChrome, FaMoon, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // ✅ use react-router-dom
import Home from "./Home";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "bg-amber-400 p-2 font-bold" : "p-2 font-bold";

  const iconLinkClass = ({ isActive }) =>
    isActive ? "dns-nav-icon dns-nav-icon-active" : "dns-nav-icon";

  return (
      <header className="px-10 flex flex-col  bg-[#3099cf]">
      <img className="h-25 w-60" src="https://dnschecker.org/themes/common/images/general/logo.svg" alt="" />
          <ul className="flex flex-1 bg-[#343a40] px-10 rounded-t-xl text-white">

              <NavLink end to="/" className={navLinkClass}>
                Home
              </NavLink>
           

       
              <NavLink to="/alltools" className={navLinkClass}>
                All Tools
              </NavLink>
            
          
              <NavLink to="/dnslookup" className={navLinkClass}>
                DNS Lookup
              </NavLink>
        

         
          
              <NavLink to="/publicdnslist" className={navLinkClass}>
                Public DNS List
              </NavLink>
      

            <li className="p-2 font-bold">
              <NavLink to="/getandroidapp" className={iconLinkClass}>
                <FaAndroid />
              </NavLink>
            </li>

            <li className="p-2 font-bold">
              <NavLink to="/getextension" className={iconLinkClass}>
                <FaChrome />
              </NavLink>
            </li>

            <li className="p-2">
              <FaMoon />
            </li>
          </ul>
      </header>
  );
};

export default Navbar;
