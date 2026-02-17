import React from "react";
import { useParams } from "react-router-dom";

const AgentConfig = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div className="min-h-screen bg-slate-100 p-6">
        <h1>{id}</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-slate-200">
        
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-3 rounded-t-xl">
          <h2 className="text-lg font-semibold"> agnets </h2>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">

          {/* Print Option */}
          <div>
            <label className="block font-medium mb-2">
              Choose a print option:
            </label>
            <select className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>0 - N/A</option>
              <option>1 - Required</option>
              <option>2 - Optional</option>
            </select>
          </div>

          {/* SMS Option */}
          <div>
            <label className="block font-medium mb-2">
              Choose a sms option:
            </label>
            <select className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>0 - N/A</option>
              <option>1 - Required</option>
              <option>2 - Optional</option>
            </select>
          </div>

          {/* WhatsApp Option */}
          <div>
            <label className="block font-medium mb-2">
              Choose a whatsapp option:
            </label>
            <select className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>0 - N/A</option>
              <option>1 - Required</option>
              <option>2 - Optional</option>
            </select>
          </div>

          {/* Collection Times */}
          <div>
            <label className="block font-medium mb-2">
              Collection number of times:
            </label>
            <select className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>0 - Default</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* No of Days */}
          <div>
            <label className="block font-medium mb-2">
              No of days:
            </label>
            <input
              type="number"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>

          {/* Amount Limit */}
          <div>
            <label className="block font-medium mb-2">
              Amount limit:
            </label>
            <input
              type="number"
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1500"
            />
          </div>

          {/* Button */}
          <div className="pt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Update
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentConfig;
