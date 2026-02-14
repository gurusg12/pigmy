import React from "react";
import {FaUserAlt  } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FcConferenceCall, FcInspection, FcComboChart, FcTodoList } from "react-icons/fc";
import { NavLink , Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <main className="flex-1 p-4 md:p-6 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2 md:gap-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
            Dashboard
          </h1>
          <h1 className="text-xl flex gap-5 justify-center items-center mb-2 border text-slate-800 w-fit p-0.5 pr-5 border-slate-800 sm:text-2xl md:text-3xl font-bold"> <FaUserAlt /> Guru Gachinamath</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start lg:h-25 h-100 border justify-start  gap-3 items-center">
          <div className="lg:h-20 w-[93%] lg:w-[25.5%] m-2 border flex justify-around items-start ">
            <FcConferenceCall className="text-7xl" />

            <div className=" w-[60%] flex flex-col justify-around items-start">  <p>Active no of accounts</p>
              <p>5</p>
              <NavLink to='manageaccountlist' className=' text-orange-400 text-l font-semibold flex justify-around items-center hover:text-blue-600'>
                More info {<IoMdSend className="text-xl  pt-0.5" />}
              </NavLink></div>
          </div>
          <div className="lg:h-20 w-[93%] lg:w-[25.5%] m-2 border pt-0.5 flex justify-around items-start ">
            <FcInspection className="text-7xl" />

            <div className=" w-[60%] flex flex-col justify-around items-start">  <p>No of receipts :</p>
              <p>5</p>
              <Link to='/agent/receipts' className='text-slate-600 text-l font-semibold flex justify-around items-center hover:text-blue-600'>
                More info{<IoMdSend className="text-xl  pt-0.5" />}
              </Link>
            
              
              </div>
          </div>
          <div className="lg:h-20 w-[93%] lg:w-[25.5%] m-2 border flex justify-around items-start ">
            <FcComboChart className="text-7xl" />

            <div className=" w-[60%] flex flex-col justify-around items-start">  <p>Total Received Amount:</p>
              <p>5</p>
              <NavLink to='/agent' className='text-yellow-800 text-l font-semibold flex justify-around items-center hover:text-blue-600'>
                More info {<IoMdSend className="text-xl  pt-0.5" />}
              </NavLink></div>
          </div>
          <div className="lg:h-20 w-[93%] lg:w-[25.5%] m-2 border flex justify-around items-start ">
            <FcTodoList ion className="text-7xl" />

            <div className=" w-[60%] flex flex-col justify-around items-start">  <p>Devicewise summary :</p>
              <p>5</p>
              <NavLink to='/agent' className=' text-lime-600 text-l font-semibold flex justify-around items-center hover:text-blue-600'>
                More info {<IoMdSend className="text-xl  pt-0.5" />}
              </NavLink></div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Dashboard;
