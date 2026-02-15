import React, { useState } from "react";

const Changepass = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.newPassword !== form.confirmPassword) {
      return setError("New password and confirm password do not match.");
    }

    if (form.newPassword.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    // API Call here
    setSuccess("Password changed successfully!");
  };

  const passwordStrength = () => {
    if (form.newPassword.length > 8) return "Strong";
    if (form.newPassword.length >= 6) return "Medium";
    if (form.newPassword.length > 0) return "Weak";
    return "";
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 
                      rounded-2xl p-6 text-white shadow-xl mb-8">
        <h1 className="text-2xl font-bold">Change Password</h1>
        <p className="opacity-80 text-sm">
          Update your account security credentials
        </p>
      </div>

      {/* Card */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Old Password
            </label>
            <div className="relative">
              <input
                type={show.old ? "text" : "password"}
                name="oldPassword"
                value={form.oldPassword}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShow({ ...show, old: !show.old })}
                className="absolute right-3 top-3 text-sm text-indigo-600"
              >
                {show.old ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={show.new ? "text" : "password"}
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShow({ ...show, new: !show.new })}
                className="absolute right-3 top-3 text-sm text-indigo-600"
              >
                {show.new ? "Hide" : "Show"}
              </button>
            </div>

            {/* Strength */}
            {form.newPassword && (
              <p className={`text-sm mt-2 
                ${passwordStrength() === "Strong" ? "text-green-600" :
                  passwordStrength() === "Medium" ? "text-yellow-600" :
                  "text-red-600"}`}>
                Strength: {passwordStrength()}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={show.confirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="button"
                onClick={() =>
                  setShow({ ...show, confirm: !show.confirm })
                }
                className="absolute right-3 top-3 text-sm text-indigo-600"
              >
                {show.confirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-100 text-green-600 p-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 
                       text-white py-3 rounded-xl font-semibold 
                       shadow-md transition duration-300"
          >
            Update Password
          </button>

        </form>
      </div>
    </div>
  );
};

export default Changepass;
