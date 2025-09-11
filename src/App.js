import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="love-page">
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={25} />
      <div className="container">
        <h2 className="fade-in float-in">Happy Birthday Day, Rashi !!!</h2>

        <p className="fade-in delay-1">Wishing a very Happy Birthday to my favorite person !😇</p>
        <p className="fade-in delay-2">Being your boyfriend is my best thing that has ever happened to me.😭</p>
        <p className="fade-in delay-2">Thank you for being you - gorgeous, funny, and endlessly caring. I hope this year brings you as much happiness as you have brought into my life.💫</p>
        <p className="fade-in delay-3">I hope you know, I will do everything I can to give you the ever lasting, true love you deserve 😘</p>
        <h2 className="fade-in delay-4"><i><b>I LOVE YOU BABE 💖</b></i></h2>
      </div>
    </div>
  );
}

export default App;
