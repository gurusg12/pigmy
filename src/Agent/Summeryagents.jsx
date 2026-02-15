import React from "react";
import { FaUserCircle, FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

const Summaryagent = () => {
  const account = {
    name: "Jyoti Sharanabasu Hawaldar",
    type: "PGAC - 1",
    mobile: "9845256532",
    open: "07/02/26",
    close: "07/02/27",
    balance: 25000,
    totalDeposit: 50000,
    totalWithdraw: 25000,
    status: "Active",
  };

  const transactions = [
    { date: "01/01/26", type: "Deposit", amount: 10000 },
    { date: "05/01/26", type: "Deposit", amount: 20000 },
    { date: "10/01/26", type: "Withdraw", amount: 5000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

      {/* 🔷 Header */}
      <div className="backdrop-blur-lg bg-white/60 border border-white/30 
                      rounded-3xl p-6 shadow-xl mb-8">
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-5xl text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {account.name}
            </h1>
            <p className="text-slate-500 text-sm">
              {account.type} • {account.mobile}
            </p>
          </div>
        </div>
      </div>

      {/* 💰 Main Balance Card */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 
                      text-white rounded-3xl p-8 shadow-2xl mb-8 relative overflow-hidden">

        <FaWallet className="absolute right-6 top-6 text-6xl opacity-20" />

        <h2 className="text-sm opacity-80 mb-2">Current Balance</h2>
        <p className="text-4xl font-bold mb-4">₹ {account.balance}</p>

        <div className="flex flex-wrap gap-6 text-sm opacity-90">
          <span>Open: {account.open}</span>
          <span>Close: {account.close}</span>
          <span>Status: {account.status}</span>
        </div>
      </div>

      {/* 📊 Stats Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-500 text-sm mb-1">Total Deposits</h3>
              <p className="text-2xl font-bold text-green-600">
                ₹ {account.totalDeposit}
              </p>
            </div>
            <FaArrowUp className="text-3xl text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-500 text-sm mb-1">Total Withdrawals</h3>
              <p className="text-2xl font-bold text-red-600">
                ₹ {account.totalWithdraw}
              </p>
            </div>
            <FaArrowDown className="text-3xl text-red-500" />
          </div>
        </div>

      </div>

      {/* 📑 Transactions */}
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h3 className="text-lg font-semibold text-slate-700 mb-6">
          Recent Transactions
        </h3>

        <div className="space-y-4">
          {transactions.map((txn, index) => (
            <div
              key={index}
              className="flex justify-between items-center 
                         bg-slate-50 p-4 rounded-2xl 
                         hover:bg-slate-100 transition"
            >
              <div>
                <p className="text-sm text-slate-500">{txn.date}</p>
                <p className="font-medium text-slate-700">{txn.type}</p>
              </div>

              <div
                className={`flex items-center gap-2 font-semibold
                ${txn.type === "Deposit"
                  ? "text-green-600"
                  : "text-red-600"}`}
              >
                {txn.type === "Deposit" ? <FaArrowUp /> : <FaArrowDown />}
                ₹ {txn.amount}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Summaryagent;
