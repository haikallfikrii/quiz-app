import React from "react";

const Question = ({ question, onAnswer }) => {
  const handleAnswerClick = (answer) => {
    onAnswer(answer === question.correct_answer);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="space-y-2">
        {question.incorrect_answers
          .concat(question.correct_answer)
          .sort()
          .map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              {answer}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Question;
