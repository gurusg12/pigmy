import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { LoginUserInfo } from "../Api/Loginfo";
import Api from "../Api/LoginApi";

const LoginFormCompany = () => {
  const { setloginuser } = useContext(LoginUserInfo);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Optional: clear session once on mount
  useEffect(() => {
    localStorage.removeItem("userrole");
    localStorage.removeItem("logininfo");
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new URLSearchParams();
      data.append("email", form.email);
      data.append("pwd", form.password);
      data.append("loginmode", "Manager");

      const response = await fetch(Api.Login_api, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      const result = await response.json();

      if (result?.loginfo?.name && result?.loginfo?.usrunqid) {
        localStorage.setItem(
          "userrole",
          JSON.stringify({ role: "company" })
        );
        localStorage.setItem("logininfo", JSON.stringify(result));

        setloginuser(result);
        navigate("/company");

        setForm({ email: "", password: "" });
      } else {
        setError(`No company found for ${form.email}`);
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [form, navigate, setloginuser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a0a3e] to-[#0f0520] flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-md border border-purple-500/30 rounded-3xl shadow-2xl p-8 w-full max-w-md">
        
        <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30 shadow-lg shadow-purple-500/50">
          <FaUser className="text-4xl text-purple-300" />
        </div>

        <h2 className="text-3xl text-white text-center mb-2">
          Company Login
        </h2>
        <p className="text-purple-300 text-center text-sm mb-8">
          Enter your credentials to continue
        </p>

        {error && (
          <p className="text-red-400 text-center text-sm mb-6 bg-red-900/30 py-2 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={submit} className="space-y-5">
          
          {/* Email */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              name="email"
              placeholder="USERNAME / EMAIL"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition disabled:opacity-60"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full bg-purple-950/50 border border-purple-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl transition ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:from-purple-500 hover:to-purple-600"
            }`}
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            disabled={loading}
            className="w-full border border-purple-400/50 text-purple-300 py-3 rounded-xl hover:bg-purple-500/20 transition disabled:opacity-60"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormCompany;