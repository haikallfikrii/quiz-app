import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../services/api";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("quizState"));
    if (savedState) {
      setQuestions(savedState.questions);
      setCurrentQuestionIndex(savedState.currentQuestionIndex);
      setScore(savedState.score);
      setTimeLeft(savedState.timeLeft);
    } else {
      const getQuestions = async () => {
        const questions = await fetchQuestions();
        setQuestions(questions);
      };
      getQuestions();
    }
  }, []);

  useEffect(() => {
    const quizState = { questions, currentQuestionIndex, score, timeLeft };
    localStorage.setItem("quizState", JSON.stringify(quizState));
  }, [questions, currentQuestionIndex, score, timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
    localStorage.removeItem("quizState");
    return <Result score={score} totalQuestions={questions.length} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
