import React, { useEffect, useState } from 'react';
import './Stars.css'; 

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        const star = {
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth,
          animationDelay: `${Math.random() * 2}s`,
        };
        starsArray.push(star);
      }
      setStars(starsArray);
    };

    createStars();
  }, []);

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
