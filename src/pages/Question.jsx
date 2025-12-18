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
    <div id="question" className="flex flex-col gap-8 p-8 bg-[#1d0433]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-2xl mx-auto mt-5 animate-fade-in-up">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-purple-300 mb-1">
            <span>Question {index + 1} of {questions.length}</span>
            <span>{questions[index].category || "Quiz"}</span>
        </div>
        <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState} />
      </div>

      <div className="py-4">
        <h2 className="text-3xl font-bold text-white leading-tight text-center drop-shadow-md">
          {questions[index].text}
        </h2>
      </div>

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