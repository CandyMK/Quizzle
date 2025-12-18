import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ id, name, description, time, questions, colorTheme }) => {
  
  const hoverBorders = {
    blue: "hover:border-blue-500",
    pink: "hover:border-pink-500",
    yellow: "hover:border-yellow-500",
  };

  const iconColors = {
    blue: "text-blue-500 bg-blue-50",
    pink: "text-pink-500 bg-pink-50",
    yellow: "text-yellow-500 bg-yellow-50",
  };

  const hoverBorderClass = hoverBorders[colorTheme] || hoverBorders.blue;
  const iconColorClass = iconColors[colorTheme] || iconColors.blue;

  return (
    <Link to={`/quiz/${id}`} className="group block w-full max-w-2xl">
      <article
        className={`
          rounded-xl bg-white p-4 sm:p-6 lg:p-8 
          transition-all duration-300 
          border-3 border-transparent ${hoverBorderClass} 
          hover:shadow-xl hover:-translate-y-1
        `}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Judul */}
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors">
              {name}
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* Info Waktu & Jumlah Soal */}
            <div className="mt-6 flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="size-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {time}
              </div>

              <div className="flex items-center gap-1.5">
                <svg className="size-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {questions} Questions
              </div>
            </div>
          </div>

          <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-full transition-colors ${iconColorClass}`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default QuizCard;