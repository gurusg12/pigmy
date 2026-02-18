import React, {  useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Api from "../../Api/LoginApi"
import { Dashboards } from '../../Auth/ComDashBoard';

const Accountlist = () => {

    const {id  } = useParams();
    const {username} = useContext(Dashboards)
    const [accounts , setaccounts] = useState([])
    useEffect(()=>{
        const user = localStorage.getItem("logininfo")
        const login = JSON.parse(user)
       
        const data = new URLSearchParams()
        data.append("apikey" , "getAccounts")
        data.append("userunqid" ,id)
        data.append("token" , login.loginfo.token)


        fetch(Api.Account_list , {
            method : "POST" , headers : {
                "Content-Type" :"application/x-www-form-urlencoded"
            },
            body : data.toString()
        })
        .then((f)=>f.json())
        .then((f)=>{console.log("may nam eis ")
            console.log(f)
            setaccounts(f.accounts)

        })
        .catch((f)=>console.log(f))


        
    },[])

    console.log("gueus" ,accounts)
  return (
    <>
    
    <h1>{username}</h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gray-50">


  

           {accounts.map((a, b) => (

    <div key={b} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">ID: {a.Ac_Id}</span>
          <h3 className="text-lg font-bold text-gray-800">{a.Ac_name}</h3>
        </div>
        <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-1 rounded-md font-bold uppercase">
            Acc-type [
          {a.Ac_type}]
        </span>
      </div>
      
      <div className="text-sm text-gray-600 space-y-2 mb-6">
        <p className="flex items-center gap-2">
          <span className="opacity-50 text-xs">📞</span> {a.Mobile_no}
        </p>
      </div>

      <Link 
        to="/summary" 
        className="block text-center w-full py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
      >
        View Account Summary
      </Link>
    </div> ))}
  </div>
</>
  )
}

export default Accountlist