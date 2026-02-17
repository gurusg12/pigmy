import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { UserContext } from "../Auth/Userprovider";
import { LoginUserInfo } from "../Api/Loginfo";
import Api from "../Api/LoginApi";

const LoginFormCompany = () => {
  const { setloginuser } = useContext(LoginUserInfo);
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = new URLSearchParams();
    data.append("email", name);
    data.append("pwd", pass);
    data.append("loginmode", "Manager");

    fetch(Api.Login_api, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    })
      .then((f) => f.json())
      .then((f) => {
        setLoading(false);
        console.log(f);

        if (f.loginfo.name !== null && f.loginfo.usrunqid !== null) {
          localStorage.setItem("userrole", JSON.stringify({ role: "company" }));
          localStorage.setItem("logininfo", JSON.stringify(f));
          setloginuser(f);
          console.log( "login info " , f);

          navigate("/company");
          setname("");
          setpass("");
        } else {
          setError(`on this name ${name} company not present`);
          setloginuser();
          navigate("/");
          setname("");
          setpass("");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("Login failed. Please try again.");
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a0a3e] to-[#0f0520] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Animated background glow - same as demo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-md border border-purple-500/30 rounded-3xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Company icon circle - same style */}
        <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30 shadow-lg shadow-purple-500/50">
          <FaUser className="text-4xl text-purple-300" />
        </div>

        <h2 className="text-3xl text-white text-center mb-2">Company Login</h2>
        <p className="text-purple-300 text-center text-sm mb-8">Enter your credentials to continue</p>

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-center text-sm mb-6 bg-red-900/30 py-2 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={submit} className="space-y-5">
          {/* Username / Email input */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              placeholder="USERNAME / EMAIL"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              disabled={loading}
              className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition disabled:opacity-60"
            />
          </div>

          {/* Password / Phone input */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="password"  // changed to password type (better UX)
              placeholder="PASSWORD / PHONE"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              required
              disabled={loading}
              className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition disabled:opacity-60"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-purple-300 cursor-pointer">
              <input 
                type="checkbox" 
                className="mr-2 accent-purple-500" 
                disabled={loading} 
              />
              Remember me
            </label>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition">
              Forgot password?
            </a>
          </div>

          {/* Login button - same purple gradient style */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl transition shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50 ${
              loading 
                ? "opacity-60 cursor-not-allowed" 
                : "hover:from-purple-500 hover:to-purple-600"
            }`}
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>

          {/* Back to home */}
          <button
            type="button"
            onClick={() => navigate("/")}
            disabled={loading}
            className="w-full border border-purple-400/50 text-purple-300 py-3 rounded-xl hover:bg-purple-500/20 hover:border-purple-300 transition disabled:opacity-60"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormCompany;