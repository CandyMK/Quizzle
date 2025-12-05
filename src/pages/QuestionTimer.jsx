import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  
  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full">
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={`
          w-full h-3 rounded-full overflow-hidden
          [&::-webkit-progress-bar]:bg-gray-200 
          [&::-webkit-progress-value]:transition-all 
          [&::-webkit-progress-value]:duration-300
          ${
            mode === "correct"
              ? "[&::-webkit-progress-value]:bg-green-500"
              : mode === "wrong"
              ? "[&::-webkit-progress-value]:bg-red-500"
              : "[&::-webkit-progress-value]:bg-purple-500"
          }
        `}
      />
    </div>
  );
}