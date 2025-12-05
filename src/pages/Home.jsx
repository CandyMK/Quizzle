import React from "react";
import QuizCard from "../components/QuizCard"; // Sesuaikan path ini

export default function Home() {
  const quizzes = [
    {
      id: "english",
      name: "English Test",
      description: "Test your grammar, vocabulary, and reading comprehension skills.",
      time: "4 Mins",
      questions: 8,
      colorTheme: "blue",
    },
    {
      id: "math",
      name: "Math Test",
      description: "Challenge yourself with algebra, geometry, and logic puzzles.",
      time: "6 Mins",
      questions: 5,
      colorTheme: "pink",
    },
    {
      id: "generalKnowledge",
      name: "General Knowledge",
      description: "From history to pop culture, see how much you know about the world.",
      time: "6 Mins",
      questions: 10,
      colorTheme: "yellow",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 font-roboto bg-[#3c255d] text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">Welcome to Quizzle</h1>
        <p className="text-lg opacity-80 mt-2">
          Select a category below to start your journey!
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full items-center">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            id={quiz.id}
            name={quiz.name}
            description={quiz.description}
            time={quiz.time}
            questions={quiz.questions}
            colorTheme={quiz.colorTheme}
          />
        ))}
      </div>
    </div>
  );
}