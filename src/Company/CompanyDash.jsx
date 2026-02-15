import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FcConferenceCall, FcInspection, FcComboChart, FcTodoList } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Auth/Userprovider";

const CompanyDash = () => {
  const user = useContext(UserContext)
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2 md:gap-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
            Dashboard
          </h1>
          <p>phone number is {user.phone}</p>
          <div className="flex items-center gap-3 text-gray-800 text-lg md:text-xl font-semibold border border-gray-800 px-3 py-1 rounded">
            <FaUserAlt /> {user.username}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Active Accounts */}
          <div className="flex flex-col items-start bg-white border rounded p-4 shadow hover:shadow-lg transition">
            <FcConferenceCall className="text-6xl mb-2" />
            <p className="font-semibold">Active Accounts</p>
            <p className="text-xl font-bold">5</p>
            <NavLink 
              to="/agent/manageacc" 
              className="mt-2 text-orange-500 flex items-center gap-1 hover:text-blue-600"
            >
              More info <IoMdSend />
            </NavLink>
          </div>

          {/* Receipts */}
          <div className="flex flex-col items-start bg-white border rounded p-4 shadow hover:shadow-lg transition">
            <FcInspection className="text-6xl mb-2" />
            <p className="font-semibold">No of Receipts</p>
            <p className="text-xl font-bold">5</p>
            <NavLink 
              to="/agent/receipts" 
              className="mt-2 text-slate-600 flex items-center gap-1 hover:text-blue-600"
            >
              More info <IoMdSend />
            </NavLink>
          </div>

          {/* Total Received Amount */}
          <div className="flex flex-col items-start bg-white border rounded p-4 shadow hover:shadow-lg transition">
            <FcComboChart className="text-6xl mb-2" />
            <p className="font-semibold">Total Received Amount</p>
            <p className="text-xl font-bold">$12,500</p>
            <NavLink 
              to="/agent/dashboard" 
              className="mt-2 text-yellow-800 flex items-center gap-1 hover:text-blue-600"
            >
              More info <IoMdSend />
            </NavLink>
          </div>

          {/* Devicewise Summary */}
          <div className="flex flex-col items-start bg-white border rounded p-4 shadow hover:shadow-lg transition">
            <FcTodoList className="text-6xl mb-2" />
            <p className="font-semibold">Devicewise Summary</p>
            <p className="text-xl font-bold">5</p>
            <NavLink 
              to="/agent/dashboard" 
              className="mt-2 text-lime-600 flex items-center gap-1 hover:text-blue-600"
            >
              More info <IoMdSend />
            </NavLink>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CompanyDash;
