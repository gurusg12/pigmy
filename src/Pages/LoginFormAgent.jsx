import React, { useContext, useState } from "react";
import { UserContext } from "../Auth/Userprovider";
import { useNavigate } from "react-router-dom";

const LoginFormAgent = () => {
  const { setuser } = useContext(UserContext);

  const [name, setname] = useState("");
 
  const [phone, setphone] = useState("");


const navigate = useNavigate()

  function submit(e) {
    e.preventDefault();
    setuser({ username: name, role: "agent", phone: phone });
    navigate('/agent')
  


    setname("");

    setphone("");
    

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          User Login
        </h2>
        <form onSubmit={submit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
          </div>
           {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              required
            />
          </div>



          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormAgent;
