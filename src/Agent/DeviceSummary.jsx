import React, { useState } from "react";
import { FaMobileAlt, FaSearch } from "react-icons/fa";

const DeviceSummary = () => {
  const [search, setSearch] = useState("");

  // Sample Data (replace with API later)
  const devices = [
    {
      id: 1,
      deviceName: "Mobile App",
      receipts: 12,
      totalAmount: 25000,
    },
    {
      id: 2,
      deviceName: "Web Portal",
      receipts: 8,
      totalAmount: 18000,
    },
    {
      id: 3,
      deviceName: "Tablet Device",
      receipts: 5,
      totalAmount: 9000,
    },
  ];

  const filteredData = devices.filter((item) =>
    item.deviceName.toLowerCase().includes(search.toLowerCase())
  );

  const totalReceipts = devices.reduce((acc, curr) => acc + curr.receipts, 0);
  const totalAmount = devices.reduce((acc, curr) => acc + curr.totalAmount, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* 🔷 Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Devicewise Summary
        </h1>
        <p className="text-slate-500 text-sm">
          Overview of collections by device
        </p>
      </div>

      {/* 🔥 Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
          <div className="bg-indigo-100 p-4 rounded-xl text-indigo-600 text-2xl">
            <FaMobileAlt />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Devices</p>
            <h2 className="text-xl font-bold">{devices.length}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-sm text-slate-500">Total Receipts</p>
          <h2 className="text-xl font-bold text-blue-600">
            {totalReceipts}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-sm text-slate-500">Total Collection</p>
          <h2 className="text-xl font-bold text-green-600">
            ₹ {totalAmount}
          </h2>
        </div>

      </div>

      {/* 🔍 Search + Entries */}
      <div className="bg-white p-4 rounded-2xl shadow-md mb-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Show</span>
          <select className="border rounded-lg px-2 py-1 text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm text-slate-600">entries</span>
        </div>

        <div className="relative w-full md:w-64">
          <FaSearch className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search device..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

      </div>

      {/* 📊 Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Device Name</th>
                <th className="p-3">No. of Receipts</th>
                <th className="p-3">Total Amount</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-slate-500">
                    No device data available
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="border-t hover:bg-slate-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium">{item.deviceName}</td>
                    <td className="p-3 text-blue-600 font-semibold">
                      {item.receipts}
                    </td>
                    <td className="p-3 text-green-600 font-semibold">
                      ₹ {item.totalAmount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default DeviceSummary;
