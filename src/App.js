import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';
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
      {/* <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={25} /> */}
      <div className="container">
        <h2 className="fade-in float-in">Our Starmark #6 - Half a year of Loving & Obsessed with you</h2>
        <p className="fade-in delay-1">6 months ago, I was just a boy who got incredibly lucky at Prague Airport.</p>
        <p className="fade-in delay-1">Since that day, every normal moment somehow turned magical just because you were in it.</p>
        <p className="fade-in delay-2">I still get butterflies when your notification pops up on my phone. I still smile like an idiot when I talk and think about you. And I still cannot believe you chose me. We have met 16 times till now and still it feels so less.</p>
        <p className="fade-in delay-2">Thank you for every late-night call and every good morning text, every corset and towel pictures that almost give me a heart attack and every single time, you look at me like Iam your whole world, because you are mine. I love the next 6 months, the next 6 years, and all the months after that with you. </p>
        <p className="fade-in delay-3">Happy half-year of us, gorgeous. I love you more than yesterday, but nowhere near as much as tomorrow. </p>
        <p className="fade-in delay-3">I hope, you will try to forget your past and you will also love me completely 100% someday. </p>
        <p className="fade-in delay-4">I wish, we go to Prague one day. I will be waiting for you with bag of Doritos and boarding pass at the airport, hoping that you would approach me and we will fall in love once again.</p>
        <h2 className="fade-in delay-4"><i><b>Forever yours RASHI💖</b></i></h2>
        <h2 className="fade-in delay-4"><i><b>MENKA</b></i></h2>
      </div>
    </div>
  );
}

export default App;
