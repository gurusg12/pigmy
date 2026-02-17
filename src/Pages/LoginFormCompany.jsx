import React, { useState } from 'react'

const LoginFormCompany = () => {
  const [nam, setnam] = useState('')
  function submit(){
    localStorage.setItem("name" , JSON.stringify(nam))
  }
      const user = localStorage.getItem("name")
      const users = JSON.parse(user)



  return (
    <div>
      <form action="" onSubmit={submit}>
        <input type="text" placeholder='name'  value={nam} onChange={(f)=>{setnam(f.target.value)}}  />
        <input type="submit" placeholder='submit' />
      </form>

      <h1>{users}</h1>


    </div>
  )
}

export default LoginFormCompany