import React from "react";
import QuizCard from "../components/QuizCard"; 

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
    <div className="min-h-screen flex flex-col items-center py-10 px-4 font-roboto text-white">
      <div className="text-center mb-10 animate-fade-in-down">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400 drop-shadow-lg">
          Welcome to Quizzle
        </h1>
        <p className="text-xl text-purple-200 mt-3 font-light">
          Select a category below to start your journey!
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full items-center max-w-4xl">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            {...quiz}
          />
        ))}
      </div>
    </div>
  );
}