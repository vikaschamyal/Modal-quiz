import React, { useState } from "react";
import quizData from "./data/quizData";
import Modal from "./Modal";

const QuizApp = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => setSelected(option);

  const handleNext = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  const q = quizData[current];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">React Quiz</h2>
      <p className="mb-4 text-lg font-medium">
        <span className="text-gray-600">Q{current + 1}:</span> {q.question}
      </p>

      <ul className="space-y-2 mb-6">
        {q.options.map((opt) => (
          <li
            key={opt}
            onClick={() => handleOptionClick(opt)}
            className={`p-3 border rounded-md cursor-pointer transition-all ${
              selected === opt
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        disabled={!selected}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {current + 1 === quizData.length ? "Submit" : "Next"}
      </button>

      <Modal isOpen={showResult} onClose={() => setShowResult(false)}>
        <h2 className="text-xl font-semibold mb-4">Your Score</h2>
        <p className="text-lg mb-4">
          You got <strong>{score}</strong> out of {quizData.length}
        </p>
        <button
          onClick={restart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Restart Quiz
        </button>
      </Modal>
    </div>
  );
};

export default QuizApp;
