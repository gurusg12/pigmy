import React, { useContext, useEffect, } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import {
  FcConferenceCall,
  FcInspection,
  FcComboChart,
  
} from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import Api from "../Api/LoginApi";
import { Dashboards } from "../Auth/ComDashBoard";
import AgentsListforDash from "../Components/Company/AgentsListforDash";

const CompanyDash = () => {
   const user= localStorage.getItem("logininfo")
   const logininfo = JSON.parse(user)
   const{dash, setdash , setagents} = useContext(Dashboards)



 
  useEffect(()=>{
  const data = new URLSearchParams()
  data.append("apikey" , "getDashboard")
  data.append("token" ,logininfo.loginfo.token )
    fetch(Api.Dash_Board, {
      method : "POST",headers:{"Content-Type" : "application/x-www-form-urlencoded"} ,body : data.toString()
    })
    .then((f)=> f.json())
    .then((g)=>{
      console.log("login" , g)
      setdash(g)
       setagents(g.agents)
      
    })

   

  },[])

 


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

      {/* 🔷 Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋 <p></p>
          </h1>
          <p className="text-slate-500 text-sm">
            Here is your dashboard overview
          </p>

        </div>
                  <h1 className="border w-fit px-3 py-0.3 rounded  text-l font-mono flex justify-between items-center ">           <FaUserAlt className="text-slate-600 mr-3" />
 {logininfo.loginfo.name_name}</h1>


        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-md">
          
          <span className="font-semibold text-slate-700">
            {logininfo.loginfo.name}
          </span>
        </div>
      </div>

      {/* 🔥 Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Active Accounts */}
        
         
<div className="bg-emerald-500 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcConferenceCall className="text-5xl" />
            <span className="text-xl font-bold text-slate-50">Active Agents</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-200">{dash.noofagents}</h2>
          <p className="text-slate-100 text-sm mb-3">
            Number of Agents
           
          </p>

          <NavLink
            to="/company/acc"
            className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div> 
        {/* Receipts */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcInspection className="text-5xl" />
            <span className="text-xl font-bold text-slate-500">Receipts</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">{dash.totrcpts}</h2>
          <p className="text-slate-500 text-sm mb-3">
            Number of receipts
          </p>

          <Link
            to="/company"
            className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800"
          >
            More info <IoMdSend />
          </Link>
        </div>

        {/* Total Amount */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcComboChart className="text-5xl" />
            <span className="text-xl font-bold text-slate-500">Collection</span>
          </div>

          <h2 className="text-2xl font-bold text-green-600">₹ {dash.totrcptamt}</h2>
          <p className="text-slate-500 text-sm mb-3">
            Total Received Amount
          </p>

          <NavLink
            to="/company"
            className="text-green-600 font-medium flex items-center gap-1 hover:text-green-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <FcBusinessman className="text-5xl" />
            <span className="text-xl font-bold text-slate-500">Accounts</span>
          </div>

          <h2 className="text-2xl font-bold text--600"> {dash.noofacs}</h2>
          <p className="text-slate-500 text-sm mb-3">
            Total No of Accounts
          </p>

          <NavLink
            to="/company"
            className="text-sky-600 font-medium flex items-center gap-1 hover:text-green-800"
          >
            More info <IoMdSend />
          </NavLink>
        </div>

         

        {/* Device Summary */}
      
        <br />

      </div>
       <div className="flex w-full  justify-center">
          <AgentsListforDash/>
        </div>
     
    </div>
  );
};

export default CompanyDash;
