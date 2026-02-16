import React, { useContext } from "react";
import { Dashboards } from "../Auth/ComDashBoard";

const Acclist = () => {
  const { dash } = useContext(Dashboards);

  const users = dash?.agents || []; // ✅ SAFE

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((a) => (
            <div
              key={a.UserId} // ✅ better than index
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <p className="font-semibold text-lg text-slate-800">
                {a.Fname}
              </p>
              <p className="text-slate-600">Code: {a.Usercode}</p>
              <p className="text-slate-600">Mobile: {a.Mobile}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-500">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Acclist;
