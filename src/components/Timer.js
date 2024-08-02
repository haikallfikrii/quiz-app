import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimeLeft]);

  return (
    <div className="text-right mb-4">
      <p className="text-xl font-bold">Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
