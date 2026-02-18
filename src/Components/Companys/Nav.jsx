import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,      // dashboard
  FaUsers,              // agents list
  FaUserEdit,           // profile
  FaKey,                // password
  FaSignOutAlt,
} from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false); // true = expanded

  // user data
  const user = JSON.parse(localStorage.getItem("logininfo") || "{}");
  const displayName = user?.loginfo?.name || "User";
  const userRole    = user?.loginfo?.user_type || "Account";

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setOpen(false);
  };

  // Common link classes
  const linkBase = "flex items-center gap-3 px-4 py-3 text-gray-300 rounded-md transition-colors w-full";
  const active   = "bg-blue-600/80 text-white";
  const inactive = "hover:bg-slate-700/70 hover:text-white";

  return (
    <>
      {/* Thin trigger on left edge – makes it easier to catch on hover */}
      <div
        className="fixed inset-y-0 left-0 z-40 w-5 hidden md:block"
        onMouseEnter={handleMouseEnter}
      />

      {/* Sidebar – width changes on hover */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full
          bg-slate-900 border-r border-slate-800
          transition-all duration-300 ease-in-out
          ${open ? 'w-64' : 'w-16 md:w-16'}
          group               // tailwind group for group-hover:
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col h-full">

          {/* Header / Logo area */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-center md:justify-start">
            <div className="text-xl font-bold text-white">
              {open ? "Agent Panel" : "AP"}
            </div>
          </div>

          {/* Navigation – icons always, text only when open */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <NavLink
              to="/company"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              <FaTachometerAlt className="text-xl flex-shrink-0" />
              <span className={`${open ? 'block' : 'hidden'} truncate`}>
                Dashboard
              </span>
            </NavLink>

            <NavLink
              to="acclist"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              <FaUsers className="text-xl flex-shrink-0" />
              <span className={`${open ? 'block' : 'hidden'} truncate`}>
                Agents List
              </span>
            </NavLink>

            <NavLink
              to="profileupdate"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              <FaUserEdit className="text-xl flex-shrink-0" />
              <span className={`${open ? 'block' : 'hidden'} truncate`}>
                Profile Update
              </span>
            </NavLink>

            <NavLink
              to="changepass"
              className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}
            >
              <FaKey className="text-xl flex-shrink-0" />
              <span className={`${open ? 'block' : 'hidden'} truncate`}>
                Change Password
              </span>
            </NavLink>
          </nav>

          {/* Bottom – user + logout – compact when collapsed */}
          <div className="p-3 border-t border-slate-800 mt-auto">
            <div className={`flex items-center gap-3 ${open ? 'justify-start' : 'justify-center'}`}>
              <div className="w-8 h-8 rounded-full bg-blue-700/50 flex items-center justify-center text-white font-semibold flex-shrink-0">
                {displayName.charAt(0).toUpperCase()}
              </div>
              <div className={`${open ? 'block' : 'hidden'}`}>
                <div className="text-white text-sm font-medium truncate">{displayName}</div>
                <div className="text-xs text-gray-400">{userRole}</div>
              </div>
            </div>

            <NavLink
              to="/"
              className="mt-4 flex items-center justify-center gap-3 px-4 py-2.5 bg-red-600/80 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
            >
              <FaSignOutAlt className="text-lg" />
              <span className={`${open ? 'block' : 'hidden'}`}>Logout</span>
            </NavLink>
          </div>
        </div>

        {/* Small guidance arrow / hint when collapsed (desktop only) */}
        {!open && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-5 h-10 bg-slate-700/80 rounded-l-lg flex items-center justify-center text-white text-xs shadow-lg">
              →
            </div>
          </div>
        )}
      </aside>

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2.5 rounded-lg shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? '×' : '☰'}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;