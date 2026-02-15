import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import {
  FcConferenceCall,
  FcInspection,
  FcComboChart,
  FcTodoList,
} from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../Auth/Userprovider";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

      {/* 🔷 Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>
          <p className="text-slate-500 text-sm">
            Here is your dashboard overview
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-md">
          <FaUserAlt className="text-slate-600" />
          <span className="font-semibold text-slate-700">
            {user?.username}
          </span>
        </div>
      </div>

      {/* 🔥 Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Active Accounts */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcConferenceCall className="text-5xl" />
            <span className="text-sm text-slate-400">Accounts</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">5</h2>
          <p className="text-slate-500 text-sm mb-3">
            Active no of accounts
          </p>

          <NavLink
            to="/agent/acclist"
            className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div>

        {/* Receipts */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcInspection className="text-5xl" />
            <span className="text-sm text-slate-400">Receipts</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">5</h2>
          <p className="text-slate-500 text-sm mb-3">
            Number of receipts
          </p>

          <Link
            to="/agent/receipts"
            className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800"
          >
            More info <IoMdSend />
          </Link>
        </div>

        {/* Total Amount */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcComboChart className="text-5xl" />
            <span className="text-sm text-slate-400">Collection</span>
          </div>

          <h2 className="text-2xl font-bold text-green-600">₹ 5</h2>
          <p className="text-slate-500 text-sm mb-3">
            Total Received Amount
          </p>

          <NavLink
            to="/agent/summaryagent"
            className="text-green-600 font-medium flex items-center gap-1 hover:text-green-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div>

        {/* Device Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcTodoList className="text-5xl" />
            <span className="text-sm text-slate-400">Devices</span>
          </div>

          <h2 className="text-2xl font-bold text-purple-600">5</h2>
          <p className="text-slate-500 text-sm mb-3">
            Devicewise summary
          </p>

          <NavLink
            to="/agent/deviceSummary"
            className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
