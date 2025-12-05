import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect
}) {
  return (
    <ul className="flex flex-col gap-3">
      {answers.map((answer) => {
        let base = "w-full px-4 py-3 rounded-xl border text-left font-medium transition-all";

        let style = "bg-white border-gray-300 hover:bg-purple-200";

        if (answerState === "answered" && selectedAnswer === answer) {
          style = "bg-purple-500 text-white border-purple-600";
        }

        if (answerState === "correct" && selectedAnswer === answer) {
          style = "bg-green-500 text-white border-green-600";
        }

        if (answerState === "wrong" && selectedAnswer === answer) {
          style = "bg-red-700 text-white border-red-700";
        }

        return (
          <li key={answer}>
            <button
              className={`${base} ${style}`}
              onClick={() => onSelect(answer)}
              disabled={answerState === "correct" || answerState === "wrong"}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
