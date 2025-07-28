import React, { useState, useEffect } from "react";
import quizData from "./data/quizData";

const QuizApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [previousScores, setPreviousScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("quiz-scores")) || [];
    setPreviousScores(storedScores);
  }, []);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === quizData[currentIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
      const newScores = [...previousScores, score + (selected === quizData[currentIndex].answer ? 1 : 0)];
      localStorage.setItem("quiz-scores", JSON.stringify(newScores));
      setPreviousScores(newScores);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="bg-white p-6 rounded shadow-md w-full max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-2">Your Score: {score}/{quizData.length}</p>
        <h3 className="font-semibold mb-2">Previous Scores:</h3>
        <ul className="text-sm mb-4">
          {previousScores.map((s, i) => (
            <li key={i}>Attempt {i + 1}: {s}</li>
          ))}
        </ul>
        <button onClick={handleRestart} className="bg-blue-600 text-white px-4 py-2 rounded">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
      <h2 className="text-xl font-bold mb-4">Question {currentIndex + 1}</h2>
      <p className="mb-4">{quizData[currentIndex].question}</p>
      <div className="space-y-2">
        {quizData[currentIndex].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className={`w-full text-left px-4 py-2 border rounded ${
              selected === option ? (option === quizData[currentIndex].answer ? "bg-green-200" : "bg-red-200") : "bg-gray-100"
            }`}
            disabled={selected}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4 text-right">
        {selected && (
          <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">
            {currentIndex + 1 < quizData.length ? "Next" : "Finish"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
