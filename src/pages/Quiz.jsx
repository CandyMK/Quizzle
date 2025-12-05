import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import english from "../quizzes/english.js";
import math from "../quizzes/math.js";
import generalKnowledge from "../quizzes/generalKnowledge.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const { category } = useParams();

  const quizMap = { english, math, generalKnowledge };
  const Questions = quizMap[category];

  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer]
      });
    },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if(quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} Questions={Questions} />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 rounded-lg text-center">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        questions={Questions}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}