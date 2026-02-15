import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie, FaBuilding, FaSignInAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">

      {/* 🔷 Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">PigmyLite System</h1>
        <p className="opacity-80 text-sm">
          Smart Pigmy Collection & Account Management
        </p>
      </div>

      {/* 🔥 Main Section */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">

          {/* 👨‍💼 Agent Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300 text-center">

            <FaUserTie className="text-5xl text-indigo-600 mx-auto mb-4" />

            <h2 className="text-2xl font-semibold mb-3">Agent Panel</h2>
            <p className="text-slate-500 text-sm mb-6">
              Manage customers, collections and accounts easily.
            </p>

            <div className="space-y-3">
              <NavLink
                to="/agent"
                className="block bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                Go to Agent Dashboard
              </NavLink>

              <NavLink
                to="/loginagent"
                className="flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 py-2 rounded-xl hover:bg-indigo-50 transition"
              >
                <FaSignInAlt /> Agent Login
              </NavLink>
            </div>
          </div>

          {/* 🏢 Company Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition duration-300 text-center">

            <FaBuilding className="text-5xl text-blue-600 mx-auto mb-4" />

            <h2 className="text-2xl font-semibold mb-3">Company Panel</h2>
            <p className="text-slate-500 text-sm mb-6">
              Monitor agents, track performance and manage system.
            </p>

            <div className="space-y-3">
              <NavLink
                to="/company"
                className="block bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Go to Company Dashboard
              </NavLink>

              <NavLink
                to="/logincompany"
                className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition"
              >
                <FaSignInAlt /> Company Login
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* 🔻 Footer */}
      <div className="text-center py-4 text-sm text-slate-500">
        © 2026 PigmyLite. All rights reserved.
      </div>

    </div>
  );
};

export default Home;
