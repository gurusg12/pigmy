import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie, FaBuilding, FaSignInAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a0a3e] to-[#0f0520] flex flex-col relative overflow-hidden">
      
      {/* Animated background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>

      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-purple-900/60 to-blue-900/60 backdrop-blur-md border-b border-purple-500/30 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
          PigmyLite System
        </h1>
        <p className="opacity-80 text-sm md:text-base text-purple-200">
          Smart Pigmy Collection & Account Management
        </p>
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">

          {/* Agent Card */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-md border border-purple-500/30 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-purple-500/50 hover:border-purple-400/50 transition duration-300 text-center relative group">
            
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/10 rounded-3xl transition duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-purple-600/20 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30 shadow-lg shadow-purple-500/50">
                <FaUserTie className="text-4xl md:text-5xl text-purple-300" />
              </div>

              <h2 className="text-2xl md:text-3xl text-white mb-3 font-semibold">Agent Panel</h2>
              <p className="text-purple-300 text-sm md:text-base mb-8">
                Manage customers, collections and accounts easily.
              </p>

              <NavLink
                to="/loginagent"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3.5 rounded-xl hover:from-purple-500 hover:to-purple-600 transition shadow-lg shadow-purple-500/40 hover:shadow-purple-400/50 text-base md:text-lg font-medium"
              >
                <FaSignInAlt className="text-xl" /> Agent Login
              </NavLink>
            </div>
          </div>

          {/* Company Card */}
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-md border border-blue-500/30 rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-blue-500/50 hover:border-blue-400/50 transition duration-300 text-center relative group">
            
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 rounded-3xl transition duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-blue-600/20 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30 shadow-lg shadow-blue-500/50">
                <FaBuilding className="text-4xl md:text-5xl text-blue-300" />
              </div>

              <h2 className="text-2xl md:text-3xl text-white mb-3 font-semibold">Company Panel</h2>
              <p className="text-blue-300 text-sm md:text-base mb-8">
                Monitor agents, track performance and manage system.
              </p>

              <NavLink
                to="/logincompany"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl hover:from-blue-500 hover:to-blue-600 transition shadow-lg shadow-blue-500/40 hover:shadow-blue-400/50 text-base md:text-lg font-medium"
              >
                <FaSignInAlt className="text-xl" /> Company Login
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-6 text-sm text-purple-400/70 border-t border-purple-500/20">
        © 2026 PigmyLite. All rights reserved.
      </div>
    </div>
  );
};

export default Home;