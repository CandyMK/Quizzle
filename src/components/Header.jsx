import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/quiz-logo.png";

export default function Header() {

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex items-center gap-2 text-teal-600">
          <img src={logoImg} alt="Quiz Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-purple-800">Quizzle</h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="block rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}
