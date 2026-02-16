import React, { useContext, useState } from "react";
import { UserContext } from "../Auth/Userprovider";
import { useNavigate } from "react-router-dom";
import Api from "../Api/LoginApi";
import { LoginUserInfo } from "../Api/Loginfo";


const LoginFormAgent = () => {
  const { setuser } = useContext(UserContext);
  const { setloginuser } = useContext(LoginUserInfo)

  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [loding, setloading] = useState("")



  function submit(e) {
    e.preventDefault();
    const data = new URLSearchParams()
    data.append("email", name)
    data.append("pwd", pass)
    data.append("loginmode", "Manager")




    fetch(Api.Login_api,

      { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() })
      .then((f) => f.json())
      .then((f) => {
        console.log(f)
        if (f.loginfo.name !== null && f.loginfo.usrunqid !== null) {
          console.log(f)
          setloading("")
          setloginuser(f)
          navigate('/agent')
          setuser({ role: "agent" })
          setname('')
          setpass('')
        } else {
          alert(`on this name ${name} agent not present`)
          console.log(f)
          setloginuser()
          navigate('/')
          setuser({ role: "" })
          setname('')
          setpass('')
        }
      })
      .catch((f) => console.log(f))

  }

  return (
    <div className="min-h-screen w-full bg-[#7fb9a6] flex items-center justify-center relative overflow-hidden">

      {/* BIG LOGIN CIRCLE */}
      <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1c2421] to-[#0c1412] shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-white">

        {/* TITLE */}
        <h2 className="text-lg tracking-[0.35em] mb-10 opacity-80">
          {loding ? <div>{loding}</div> : <div>AGENT LOGIN</div>}
        </h2>

        {/* FORM */}
        <form onSubmit={submit} className="w-[70%] space-y-6">

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur"
          />

          {/* PHONE */}
          <input
            type="number"
            placeholder="Phone Number"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            required
            className="w-full bg-white/10 border border-white/20 rounded-md py-3 px-4 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur"
          />
          <button
            type="submit"
            className="absolute -bottom-6 right-10 w-28 h-28 rounded-full bg-[#e54757] text-white text-sm tracking-[0.3em] shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform flex items-center justify-center"
          >
            LOGIN
          </button>
        </form>

        {/* FLOATING LOGIN BUTTON */}

      </div>
    </div>
  );
};

export default LoginFormAgent;