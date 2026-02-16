import React, { useContext, useState } from 'react'
import { LoginUserInfo } from '../Api/Loginfo'
import Login_api from '../Api/LoginApi'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Auth/Userprovider'

const LoginFormCompany = () => {

  const navigate = useNavigate()
  const[naam , setnaam ] = useState('')
  const[pass , setpass] = useState('')

  const { setuser} = useContext(UserContext)
   
  const { setloginuser} = useContext(LoginUserInfo)
  const submit = (g)=> {


    g.preventDefault()
  const data = new URLSearchParams()
  data.append("email" , naam);
  data.append("pwd" , pass);

    fetch(Login_api , {
      method : "POST" , headers :{
        "Content-Type" : "application/x-www-form-urlencoded" },
      body: data.toString()
    })
    .then((f)=>f.json())
    .then((t)=>{
      console.log(t)
      if(t.status === "succuss"){
        navigate('/company')
      }
      setloginuser(t);
      setuser({role : "company"})
    })

    
    .catch((f)=>console.log(f))}

  return (
    <div>
      
      <form action="" onSubmit={submit}>
        <input type="text" placeholder='email' value={naam} onChange={(k)=>{setnaam(k.target.value)}} />
        <input type="text" placeholder='pass' value={pass} onChange={(k)=>{setpass(k.target.value)}} />
        <input type="submit" />

      </form>
      
    </div>
  )
}

export default LoginFormCompany