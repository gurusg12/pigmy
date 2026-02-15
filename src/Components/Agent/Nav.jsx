import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Auth/Userprovider";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const linkStyle =
    "block px-4 py-2 rounded-lg text-sm font-medium transition duration-200";

  const activeStyle = "bg-blue-600 text-white shadow-md";
  const inactiveStyle =
    "text-gray-300 hover:bg-slate-700 hover:text-white";

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full bg-slate-900 shadow-lg fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>

            <h1 className="text-xl font-bold text-white">
              Agent Panel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="acclist"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Account List
            </NavLink>
            <NavLink
              to="profileupdate"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Profileupdate
            </NavLink>

            <NavLink
              to="changepass"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Change-Password
            </NavLink>
          </nav>

          {/* User Info */}
          <div className="hidden md:block text-right">
            <p className="text-white text-sm font-medium">
              {user?.username}
            </p>
            <p className="text-gray-400 text-xs">
              {user?.role}
            </p>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-xl transform transition-transform duration-300 z-50 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-white font-semibold">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 p-4">
          <NavLink
            to="dashboard"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="acclist"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Account List
          </NavLink>

          <NavLink
            to="profileupdate"
            onClick={() => setOpen(false)}
            className="mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Profile
          </NavLink>

          <NavLink
              to="changepass"
              className="mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Change-Password
            </NavLink>

          <NavLink
            to="logout"
            onClick={() => setOpen(false)}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            Logout
          </NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Spacer to prevent content hidden behind fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Nav;
