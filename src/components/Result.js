import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 text-center glassmorphism">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Quiz Result</h1>
        <p className="mb-4 text-lg">Total Questions: {totalQuestions}</p>
        <p className="mb-4 text-lg">Correct Answers: {score}</p>
        <p className="mb-4 text-lg">Wrong Answers: {totalQuestions - score}</p>
      </div>
    </div>
  );
};

export default Result;
