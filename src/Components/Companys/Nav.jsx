import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = "block px-5 py-3.5 text-sm font-medium transition-colors rounded-md w-full text-left";
  const activeStyle   = "bg-blue-600/90 text-white font-semibold";
  const inactiveStyle = "text-gray-300 hover:bg-slate-700/60 hover:text-white";

  // Safely get user info (with fallback if not found)
  const user = JSON.parse(localStorage.getItem("logininfo"));
  const displayName = user?.loginfo?.name;
  const userRole    = user?.loginfo.user_type;

  return (  
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64 bg-slate-900 border-r border-slate-800
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">

          {/* Brand / Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Agent Panel
            </h2>
            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Menu links - now takes most of the space */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            <NavLink
              to="/company"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="acclist"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              Agents List
            </NavLink>

            <NavLink
              to="profileupdate"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              Profile Update
            </NavLink>

            <NavLink
              to="changepass"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`}
            >
              Change Password
            </NavLink>
          </nav>

          {/* Bottom section: User info + Logout */}
          <div className="p-4 border-t border-slate-800 mt-auto space-y-3">
            {/* User info at bottom */}
            <div className="px-1 py-2">
              <div className="text-white font-medium">{displayName}</div>
              <div className="text-xs text-gray-400 mt-0.5">{userRole}</div>
            </div>

            {/* Logout */}
            <NavLink
              to="logout"
              onClick={() => setOpen(false)}
              className="block px-5 py-3 bg-red-600/80 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors text-center"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2.5 rounded-lg shadow-lg"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay when sidebar is open on mobile */}
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