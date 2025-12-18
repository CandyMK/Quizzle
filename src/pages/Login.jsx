import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="mt-20 w-full max-w-md rounded-2xl border border-white/10 bg-[#1d0433]/60 p-8 backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl font-black text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-8">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full rounded-lg bg-white/5 p-3 text-white border border-purple-500/30 focus:outline-none focus:border-purple-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-2">Password</label>
            <input
              type="password"
              className="w-full rounded-lg bg-white/5 p-3 text-white border border-purple-500/30 focus:outline-none focus:border-purple-400"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 py-3 font-bold text-white hover:scale-[1.02] transition-all"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account? <Link to="/register" className="font-bold text-pink-400">Sign up</Link>
        </p>
      </div>
    </div>
  );
}