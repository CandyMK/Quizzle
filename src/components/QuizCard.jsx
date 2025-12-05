import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ id, name, description, time, questions, colorTheme }) => {

  const themeColors = {
    blue: "border-blue-500 bg-blue-500 text-blue-500 ring-blue-50",
    pink: "border-pink-500 bg-pink-500 text-pink-500 ring-pink-50",
    yellow: "border-yellow-500 bg-yellow-500 text-yellow-500 ring-yellow-50",
  };

  const theme = themeColors[colorTheme] || themeColors.blue;
  const [borderColor, bgColor, ringColor] = theme.split(" ");

  return (
    <Link to={`/quiz/${id}`} className="group block w-full max-w-2xl">
      <article
        className={`rounded-xl bg-white p-4 ring-3 ${ringColor} sm:p-6 lg:p-8 transition hover:shadow-lg hover:-translate-y-1`}
      >
        <div className="flex items-start sm:gap-8">
          <div className="w-full">
            <h3 className="text-lg font-medium sm:text-xl text-gray-900 group-hover:underline">
              {name}
            </h3>

            <p className="mt-1 text-sm text-gray-700 line-clamp-2">
              {description}
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:justify-between">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="text-xs font-medium">{time}</p>
                </div>

                <span className="hidden sm:block text-gray-400">&middot;</span>

                <p className="text-xs font-medium text-gray-500">{questions} Questions</p>
              </div>

              <strong
                className={`rounded-sm border ${borderColor} ${bgColor} px-3 py-1.5 text-[10px] font-medium text-white mt-3 sm:mt-0`}
              >
                Start Quiz
              </strong>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default QuizCard;