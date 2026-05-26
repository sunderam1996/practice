/* eslint-disable no-unused-vars */ 
import React, { useState, useEffect } from 'react';
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
      <div className="container">
        <h2 className="fade-in float-in">One year of Loving & Craving for you</h2>
        <p className="fade-in delay-1">One year ago, two hopeless romantic people met at Prague Airport. I believe, it was all God's plan.</p>
        <p className="fade-in delay-1">Since that day, every moment somehow turned magical just because you were in it, as we have been to so many unique dates. You made my 30th birthday really special. </p>
        <p className="fade-in delay-2">I still smile like an idiot when I think about you. And I still cannot believe you chose me. We have met 37 times till now & still it feels so much less.</p>
        <p className="fade-in delay-2">Thank you for every good morning texts & late-night calls, every lingerie pictures and bathing video calls. I really adore you, because you are my whole world.</p>
        <p className="fade-in delay-3">Happy 1 year of us, my love. I love you more than yesterday, but nowhere near as much as tomorrow.</p>
        <p className="fade-in delay-3">I know, one year is really less time for you. And, you have already experienced every highs in your past love life. But, I have also tried my best to show you; what real, healthy and calm love is, where you have to receive more and give less.</p>
        <p className="fade-in delay-4">I was so happy and got overwhelmed, while doing the same roleplay in Pune Airport.</p>
        <h2 className="fade-in delay-4"><i><b>I wanna lick your pussy forever💖</b></i></h2>
        <h2 className="fade-in delay-4"><i><b>Forever yours, SUNDERAM</b></i></h2>
        <h2 className="fade-in delay-4"><i><b>MY RASHI💖</b></i></h2>
      </div>
    </div>
  );
}

export default App;
