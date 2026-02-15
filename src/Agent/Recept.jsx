import React, { useState } from "react";
import { FaSearch, FaFileInvoice } from "react-icons/fa";

const Recept = () => {

  const [search, setSearch] = useState("");

  // Sample Data (replace with API later)
  const receipts = [
    {
      id: 1,
      accountName: "Jyoti Sharanabasu",
      accountType: "PGAC - 1",
      receiptNo: "RCPT001",
      date: "01/01/26",
      opening: 10000,
      amount: 5000,
      closing: 15000,
      device: "Mobile App"
    },
    {
      id: 2,
      accountName: "Sujata Mallayya",
      accountType: "PGAC - 2",
      receiptNo: "RCPT002",
      date: "05/01/26",
      opening: 15000,
      amount: 3000,
      closing: 18000,
      device: "Web"
    }
  ];

  const filteredData = receipts.filter((item) =>
    item.accountName.toLowerCase().includes(search.toLowerCase())
  );

  const totalCollection = receipts.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* 🔷 Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Raghavendra Joshi - Receipts Details
        </h1>
        <p className="text-slate-500 text-sm">
          View and manage all collection receipts
        </p>
      </div>

      {/* 🔥 Stats Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
          <div className="bg-indigo-100 p-4 rounded-xl text-indigo-600 text-2xl">
            <FaFileInvoice />
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Receipts</p>
            <h2 className="text-xl font-bold">{receipts.length}</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-sm text-slate-500">Total Collection</p>
          <h2 className="text-2xl font-bold text-green-600">
            ₹ {totalCollection}
          </h2>
        </div>

      </div>

      {/* 🔍 Search + Entries */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">

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
            placeholder="Search account..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

      </div>

      {/* 📊 Table Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Account Name</th>
                <th className="p-3">Account Type</th>
                <th className="p-3">Receipt No</th>
                <th className="p-3">Collection Date</th>
                <th className="p-3">Opening</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Closing</th>
                <th className="p-3">Device</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center p-6 text-slate-500">
                    No receipts available
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="border-t hover:bg-slate-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium">{item.accountName}</td>
                    <td className="p-3">{item.accountType}</td>
                    <td className="p-3">{item.receiptNo}</td>
                    <td className="p-3">{item.date}</td>
                    <td className="p-3">₹ {item.opening}</td>
                    <td className="p-3 text-green-600 font-semibold">
                      ₹ {item.amount}
                    </td>
                    <td className="p-3">₹ {item.closing}</td>
                    <td className="p-3">{item.device}</td>
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

export default Recept;
