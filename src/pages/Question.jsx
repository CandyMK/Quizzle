import { useState, useEffect } from "react";
import Answers from "./Answer.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({ index, questions, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(shuffleArray(questions[index].answers));
    setAnswer({ selectedAnswer: '', isCorrect: null });
  }, [index, questions]);

  function handleSelectAnswer(selected) {
    setAnswer({ selectedAnswer: selected, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: selected,
        isCorrect: questions[index].answers[0] === selected
      });

      setTimeout(() => {
        onSelectAnswer(selected);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  let timer = 30000;
  if(answer.selectedAnswer) {
    timer = 1000;
  } 
  if(answer.isCorrect != null) {
    timer = 2000;
  }

  return (
    <div id="question" className="flex flex-col gap-6 p-6 bg-linear-to-r from-[#f3dfec] via-[#f1e8f8] to-[#dcebfb] backdrop-blur-lg rounded-2xl shadow-md max-w-2xl mx-auto">
      <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState} />

      <h2 className="text-2xl font-semibold text-gray-800 text-center">{questions[index].text}</h2>

      <Answers
        answers={shuffledAnswers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
