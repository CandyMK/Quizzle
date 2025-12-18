import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect
}) {
  return (
    <ul className="flex flex-col gap-4">
      {answers.map((answer) => {
        let base = "w-full px-6 py-4 rounded-xl border-2 text-left font-medium text-lg transition-all duration-300 shadow-md group relative overflow-hidden";
        
        let style = "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-0.5";

        if (answerState === "answered" && selectedAnswer === answer) {
          style = "bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(147,51,234,0.6)] scale-[1.02] z-10";
        }

        if (answerState === "correct" && selectedAnswer === answer) {
          style = "bg-green-500 border-green-400 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)] scale-[1.02] z-10";
        }

        if (answerState === "wrong" && selectedAnswer === answer) {
          style = "bg-red-500 border-red-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] scale-[1.02] z-10";
        }
        
        if ((answerState === "correct" || answerState === "wrong") && selectedAnswer !== answer) {
            style = "bg-white/5 border-transparent text-gray-500 opacity-50 blur-[1px]";
        }

        return (
          <li key={answer}>
            <button
              className={`${base} ${style}`}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""} 
            >
              <span className="relative z-10 flex items-center justify-between">
                {answer}
                {answerState === "correct" && selectedAnswer === answer && (
                    <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                )}
                {answerState === "wrong" && selectedAnswer === answer && (
                    <svg className="w-6 h-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}