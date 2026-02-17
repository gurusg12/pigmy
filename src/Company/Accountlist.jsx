import React, { useContext, useEffect } from 'react'
import { Dashboards } from '../Auth/ComDashBoard'
import Api from '../Api/LoginApi'
import { useParams } from 'react-router-dom'
import { UserContext } from '../Auth/Userprovider'
const Accountlist = () => {
    const {userunqid} = useParams()
    const {acclist , setacclist}  = useContext(Dashboards)
    useEffect(()=>{
        const data = new URLSearchParams()
        data.append("apikey","getAccounts")
        data.append("userunqid",{userunqid})

        fetch(Api.Account_list , {
            method : "POST" , headers:{"Content-Type"  : "application/x-www-form-urlencoded"},
            body : data.toString()
        })
        .then((f)=>f.json())
        .then((f)=>{
         console.log(f)
         setacclist(f)})
         .catch((f)=>console.log(f))


    },[])
  return (
    <div>
        <h1>{}</h1>
        <h1>{acclist.userunqid}</h1>
    </div>
  )
}

export default Accountlist