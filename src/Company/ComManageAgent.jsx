import React, { useContext } from "react";
import { Dashboards } from "../Auth/ComDashBoard";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ComManageAgent = () => {
  const { agents } = useContext(Dashboards);
  const navigate = useNavigate()

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-slate-700">
        List of Agents
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents?.map((agent) => (
          <div
            key={agent.Userunqid}
            className="bg-white rounded-xl shadow-md border border-slate-200 p-5 hover:shadow-lg transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                {agent.Agentname}
              </h3>
              <button className="p-2 bg-slate-100 rounded-md hover:bg-slate-200">
                <FaEdit size={14} />
              </button>
            </div>

            {/* Info */}
            <div className="text-sm text-slate-600 space-y-1 mb-4">
              <p>
                <strong>Code:</strong> {agent.Agentcode}
              </p>
              <p>
                <strong>Collection:</strong> ₹ {agent.Collamt}
              </p>
              <p>
                <strong>Receipts:</strong> {agent.Noofrcpts}
              </p>
              <p>Userunqid {agent.Userunqid}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <button onClick={()=>{navigate(`/company/acclist/${agent.Userunqid}`)}} className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                Configuration
              </button>
              <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                Accounts List
              </button>
              <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                Agent Dashboard
              </button>
              <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-blue-700 transition">
                Device List
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComManageAgent;
