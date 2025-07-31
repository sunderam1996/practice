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
        <h2 className="fade-in float-in">Happy Girlfriend's Day, Rashi 💖</h2>

        <p className="fade-in delay-1">From the moment you came into my life, everything changed for the better</p>
        <p className="fade-in delay-2">Every day with you feels like a dream. You're the sunshine in my mornings, the peace in my evenings and joy in my heart.</p>
        <p className="fade-in delay-3">I cannot wait for all memories we will make together in our future</p>
        <p className="fade-in delay-4">You are my everything, today and always💫</p>
        <p className="fade-in delay-4"><i><b>I LOVE YOU ❤️</b></i></p>
        <p className="fade-in delay-4 signature">Forever yours,<br />Sunderam❤️</p>
      </div>

      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s` }} />
        ))}
      </div>
    </div>
  );
}

export default App;
