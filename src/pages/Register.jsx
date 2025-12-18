import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
          },
        },
      });

      if (error) throw error;

      alert("Registration successful, please proceed with confirmation.");
      navigate("/");

    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1d0433]/60 p-8 backdrop-blur-xl shadow-2xl animate-fade-in-up">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Join Quizzle to challenge your friends!
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="CoolGamer123"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-pink-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-pink-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-purple-500/30 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-pink-400 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-pink-400"
              required
              minLength={6} 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:bg-white/10 focus:outline-none focus:ring-1 ${
                formData.confirmPassword && formData.password !== formData.confirmPassword
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" // Merah jika tidak cocok
                  : "border-purple-500/30 focus:border-pink-400 focus:ring-pink-400"
              }`}
              required
            />
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-xs text-red-400 mt-1">* Password Incorrect</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 rounded-lg bg-linear-to-r from-pink-600 to-purple-600 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-pink-500/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/" className="font-bold text-purple-400 hover:text-purple-300 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}