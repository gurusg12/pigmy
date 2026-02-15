import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Acclist = () => {
   const [search, setSearch] = useState("");
   const navigate = useNavigate()

  const accounts = [
    {
      name: "Jyoti Sharanabasu Hawaldar",
      type: "PGAC - 1",
      mobile: "9845256532",
      open: "07/02/26",
      close: "07/02/27",
    },
    {
      name: "Sujata Mallayya Nayakallamath",
      type: "PGAC - 2",
      mobile: "9900658965",
      open: "07/02/26",
      close: "07/02/27",
    },
    {
      name: "Manjunath",
      type: "PGAC - 4",
      mobile: "0000000000",
      open: "01/02/26",
      close: "01/02/27",
    },
  ];

  // 🔎 Filtering Logic
  const filteredAccounts = accounts.filter((acc) =>
    acc.name.toLowerCase().includes(search.toLowerCase()) ||
    acc.mobile.includes(search)
  );

  return (
 <div className="max-w-7xl pt-5 mx-auto">

  <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4 
    gap-8
  ">

    {filteredAccounts.length > 0 ? (
      filteredAccounts.map((acc, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md 
                     hover:shadow-xl hover:-translate-y-1
                     transition-all duration-300 
                     p-6 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-semibold text-slate-800 text-lg leading-snug">
              {acc.name}
            </h2>

            <span className="bg-green-100 text-green-600 
                             text-xs px-3 py-1 rounded-full whitespace-nowrap">
              Active
            </span>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm text-slate-600">
            <p><span className="font-medium">A/c Type:</span> {acc.type}</p>
            <p><span className="font-medium">Mobile:</span> {acc.mobile}</p>
            <p><span className="font-medium">Open:</span> {acc.open}</p>
            <p><span className="font-medium">Close:</span> {acc.close}</p>
          </div>

          {/* Button */}
          <button
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 
                       text-white py-2 rounded-xl 
                       font-medium transition duration-300"
                       onClick={()=>{navigate('/agent/summaryagent')}}
          >
            View Summary
          </button>
        </div>
      ))
    ) : (
      <div className="col-span-full text-center text-slate-500 text-lg">
        No accounts found.
      </div>
    )}

  </div>
</div>

  );
};

export default Acclist;
