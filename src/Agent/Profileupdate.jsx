import React, { useContext, useState } from "react";
import { UserContext } from "../Auth/Userprovider";


const Profileupdate = () => {
  const {user ,setuser } = useContext(UserContext)
  const [naam , setnaam] = useState('')
  const [phone , setphone ] = useState('')

  function submit (){
     setuser({username : naam , phone : phone} )
  }

 

  

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 
                      rounded-2xl p-8 text-white shadow-xl mb-8">
        <div className="flex items-center gap-6">
          
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-white/20 
                          flex items-center justify-center text-3xl font-bold">
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {user?.username}
            </h1>
            <p className="opacity-80">{user?.role}</p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-white 
                      rounded-2xl shadow-xl p-8">

        <h2 className="text-xl font-semibold mb-6 text-slate-700">
          Update Profile
        </h2>

        <div className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Full Name
            </label>
            <input
            onChange={(g)=>{setnaam(g.target.value)}}
              type="text"
              placeholder={user.username}
              value={naam}
              className="w-full border border-slate-300 
                         rounded-xl px-4 py-3 
                         focus:outline-none 
                         focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Mobile Number
            </label>
            <input
            onChange={(g)=>{setphone(g.target.value)}}
              type="text"
              placeholder={user.phone}
              value={phone}
              className="w-full border border-slate-300 
                         rounded-xl px-4 py-3 
                         focus:outline-none 
                         focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <div className="pt-4">
            <button onClick={submit}
              className="w-full bg-indigo-600 
                         hover:bg-indigo-700 
                         text-white 
                         py-3 rounded-xl 
                         font-semibold 
                         shadow-md 
                         transition duration-300"
            >
              Update Profile
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profileupdate;
