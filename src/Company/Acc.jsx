import React, {  useEffect, useState } from 'react'
import Api from '../Api/LoginApi'

const Acc = () => {

    const [accounts , setaccounts] = useState([])
    useEffect(()=>{
        const user = localStorage.getItem("logininfo")
        const login = JSON.parse(user)
       
        const data = new URLSearchParams()
        data.append("apikey" , "getAgents")
        data.append("unqid" ,"6144712d6d21b")
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
   <div>guru</div>

</>
  )
}

export default Acc