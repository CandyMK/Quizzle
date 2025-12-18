import { Link } from "react-router-dom";
import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1d0433]/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Quiz Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
          />
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-200 to-pink-300 group-hover:to-white transition-all">
            QUIZZLE
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="rounded-full bg-linear-to-r from-purple-600 to-purple-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:shadow-purple-500/40 hover:-translate-y-0.5 hover:from-purple-500 hover:to-purple-400"
          >
            Login
          </Link>
        </div>

      </div>
    </header>
  );
}