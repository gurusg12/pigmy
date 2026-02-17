import React, { useContext } from "react";
import { FaEdit, FaUser, FaWallet, FaFileInvoice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Dashboards } from "../../Auth/ComDashBoard";

const AgentsListforDash = () => {
  const { agents, settoken } = useContext(Dashboards);
  const navigate = useNavigate();

  function submit(agent) {
    const { Userunqid, token } = agent;
    settoken({ Userunqid, token });
    navigate(`/company/agentsacclist/${Userunqid}`);
  }

  return (
    <div className="p-4.5 bg-transparent min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            Agent Directory
          </h2>
          <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
            Total Agents: {agents?.length || 0}
          </span>
        </div>

        {/* Horizontal List Container */}
        <div className="flex flex-col gap-3">
          {agents?.map((agent) => (
            <div
              key={agent.Userunqid}
              className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              {/* Profile & Name Section */}
              <div className="flex items-center gap-4 lg:w-1/4">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <FaUser size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {agent.Agentname}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    ID: {agent.Agentcode}
                  </p>
                </div>
              </div>

              {/* Data Metrics Section */}
              <div className="grid grid-cols-2 md:flex md:items-center gap-6 lg:gap-12 flex-grow px-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Collection</span>
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <FaWallet className="text-emerald-500" size={14} />
                    <span>₹{agent.Collamt}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Receipts</span>
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <FaFileInvoice className="text-blue-500" size={14} />
                    <span>{agent.Noofrcpts}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-wrap items-center gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <button 
                  onClick={() => navigate(`/company/acclist/${agent.Userunqid}`)}
                  className="px-3 py-2 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition flex items-center gap-2"
                >
                  Configuration
                </button>
                
                <button 
                  onClick={() => submit(agent)}
                  className="px-3 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm shadow-blue-200 transition"
                >
                  Accounts List
                </button>

                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!agents || agents.length === 0) && (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-20 text-center">
            <p className="text-slate-400">No agents found in the system.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsListforDash;

