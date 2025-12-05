import quizCompleteImg from "../assets/quiz-complete.png";

export default function Summary({ userAnswers, Questions }) {
  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 rounded-xl shadow-xl
      bg-blue-100 text-gray-900 animate-fade-in"
    >
      <div className="flex justify-center mb-4">
        <img src={quizCompleteImg} alt="Quiz Complete" className="w-24 h-24" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-6">Quiz Completed!</h2>

      <div className="flex justify-center gap-12 my-6 border-b-2 pb-6 border-purple-700">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold">{skippedAnswersShare}%</span>
          <span className="uppercase text-sm">Skipped</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold">{correctAnswersShare}%</span>
          <span className="uppercase text-sm">Correct</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold">{wrongAnswersShare}%</span>
          <span className="uppercase text-sm">Wrong</span>
        </div>
      </div>

      {/* Answer List */}
      <ol className="space-y-4">
        {userAnswers.map((answer, index) => {
          const isCorrect = Questions[index] && answer === Questions[index].answers[0];
          const isSkipped = answer === null;

          const answerClass = isSkipped
            ? "text-yellow-700 bg-yellow-200"
            : isCorrect
            ? "text-green-700 bg-green-200"
            : "text-red-700 bg-red-200";

          return (
            <li
              key={index}
              className="p-4 rounded-lg bg-white shadow-md"
            >
              <h3 className="text-xl font-bold mb-1">Question {index + 1}</h3>

              <p className="font-medium mb-1 text-gray-700">
                {Questions[index]?.text ?? "No question found"}
              </p>

              <p className={`font-semibold px-3 py-2 rounded ${answerClass}`}>
                {answer ?? "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  )
}