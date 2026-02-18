import React, { useEffect, useState, useRef, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Api from "../Api/LoginApi";
import { Dashboards } from "../Auth/ComDashBoard";

const Acc = () => {
  const {setusername} = useContext(Dashboards)
  const [agent, setagent] = useState({});
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const loginfo = localStorage.getItem("logininfo");
    const user = JSON.parse(loginfo);

    const data = new URLSearchParams();
    data.append("apikey", "getAgents");
    data.append("usrunqid", user.loginfo.usrunqid);
    data.append("token", user.loginfo.token);

    fetch(Api.Account_list, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
    })
      .then((f) => f.json())
      .then((g) => {
        setagent(g);
      })
      .catch((f) => console.log(f));
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [agent]);




  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Agent Management
        </h1>

        {agent?.agents?.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {agent.agents.map((f, g) => (
              <div
                key={g}
                ref={(el) => (cardsRef.current[g] = el)}
                className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Agent Info */}
                <div className="mb-5">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {f.Username}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    User Code: {f.Usercode}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Mobile: {f.Mobile}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() =>
                      navigate(`/company/acclist/${f.Userunqid}`)
                    }
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Configuration
                  </button>

                  

                <button
                    onClick={() =>{
                      setusername(f.Username)
                      navigate(`/company/agentsacclist/${f.Userunqid}`)}
                    }
                    className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white py-2 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Accounts List
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20 text-lg">
            No Agent Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Acc;
