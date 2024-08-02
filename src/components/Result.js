import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Quiz Result</h1>
        <p className="mb-2">Total Questions: {totalQuestions}</p>
        <p className="mb-2">Correct Answers: {score}</p>
        <p className="mb-2">Wrong Answers: {totalQuestions - score}</p>
      </div>
    </div>
  );
};

export default Result;
