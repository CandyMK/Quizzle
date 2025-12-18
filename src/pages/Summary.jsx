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
    <div className="max-w-2xl mx-auto mt-10 p-8 rounded-3xl shadow-2xl 
      bg-gray-900/60 backdrop-blur-xl border border-white/10 text-white animate-fade-in"
    >
      <div className="flex justify-center mb-6">
        <img src={quizCompleteImg} alt="Quiz Complete" className="w-32 h-32 drop-shadow-2xl animate-bounce" />
      </div>

      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-tight bg-linear-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        Quiz Completed!
      </h2>

      {/* Stats Section */}
      <div className="flex justify-center gap-8 my-8 pb-8 border-b border-white/10">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black text-purple-300">{skippedAnswersShare}%</span>
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 mt-1">Skipped</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-black text-green-400">{correctAnswersShare}%</span>
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 mt-1">Correct</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-black text-red-400">{wrongAnswersShare}%</span>
          <span className="uppercase text-xs font-bold tracking-widest text-gray-400 mt-1">Wrong</span>
        </div>
      </div>

      {/* Answer List */}
      <ol className="space-y-4">
        {userAnswers.map((answer, index) => {
          const isCorrect = Questions[index] && answer === Questions[index].answers[0];
          const isSkipped = answer === null;

          let statusStyle = "";
          let statusText = "";
          
          if (isSkipped) {
            statusStyle = "bg-yellow-500/20 text-yellow-200 border-yellow-500/50";
            statusText = "Skipped";
          } else if (isCorrect) {
            statusStyle = "bg-green-500/20 text-green-200 border-green-500/50";
            statusText = answer;
          } else {
            statusStyle = "bg-red-500/20 text-red-200 border-red-500/50";
            statusText = answer;
          }

          return (
            <li
              key={index}
              className="p-5 rounded-xl bg-white/5 border border-white/5 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Question {index + 1}</h3>
                <p className="font-medium text-lg text-white mb-2">
                  {Questions[index]?.text ?? "No question found"}
                </p>
                
                <div className={`self-start px-4 py-2 rounded-lg border ${statusStyle} font-semibold text-sm`}>
                   {statusText}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  )
}