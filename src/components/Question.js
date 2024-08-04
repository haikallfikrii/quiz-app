import React from "react";

const Question = ({ question, onAnswer }) => {
  const handleAnswerClick = (answer) => {
    onAnswer(answer === question.correct_answer);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        {question.question}
      </h2>
      <div className="space-y-2">
        {question.incorrect_answers
          .concat(question.correct_answer)
          .sort()
          .map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className="w-full px-4 py-2 font-semibold text-gray-800 transition duration-200 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {answer}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Question;
