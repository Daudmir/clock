import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const HooksClock = () => {
  const [time, setTime] = useState(new Date());
  const [showClock, setShowClock] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const clockTimer = setInterval(() => tick(), 1000);
    return () => clearInterval(clockTimer);
  }, [showClock]);

  const tick = () => {
    if (showClock) {
      setTime(new Date());
    }
  };

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  const handleClock = () => {
    setShowClock(true);
    setShowConfetti(false);
  };

  const handleConfetti = () => {
    setShowConfetti(!showConfetti);
  };

  return (
    <div className="hooks">
      
      {showConfetti ? (
        <a
          href="#"
          class="btn btn-remove bg-purple-800"
          onClick={handleConfetti}
        >
            <h1>Hooks-Confetti</h1>
          <span>Hide</span>
          <div class="icon">
            <p className="text-2xl"></p>
          </div>
        </a>
      ) : (
        <a
          href="#"
          class="btn btn-remove bg-purple-500"
          onClick={handleConfetti}
        >
            <h1>Hooks-Confetti</h1>
          <span>Show</span>
          <div class="icon">
            <p className="text-2xl"></p>
          </div>
        </a>
      )}
      {showClock ? (
        <a href="#" class="btn btn-remove bg-blue-800" onClick={toggleClock}>
          <h1>Hooks-Clock</h1>
          <span>Hide</span>
          <div class="icon">
            <p className="text-2xl"></p>
          </div>
        </a>
      ) : (
        <a href="#" class="btn btn-remove bg-blue-500" onClick={handleClock}>
          <h1>Hooks-Clock</h1>
          <span>Show</span>
          <div class="icon">
            <p className="text-2xl"></p>
          </div>
        </a>
      )}
      <h1 className="text-5xl ">{showClock && time.toLocaleTimeString()}</h1>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default HooksClock;