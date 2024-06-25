import React, { useEffect, useState } from 'react';
import './RotatingText.css';

const RotatingText = () => {
  const words = [
    { text: 'effortlessly.', color: 'alizarin' },
    { text: 'quickly.', color: 'wisteria' },
    { text: 'today.', color: 'peter-river' },
    { text: 'easily.', color: 'emerald' },
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const rotateText = () => {
      const currentWord = document.querySelectorAll('.word')[currentWordIndex];
      const nextWordIndex = currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
      const nextWord = document.querySelectorAll('.word')[nextWordIndex];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = 'letter out';
        }, i * 80);
      });

      nextWord.style.opacity = '1';
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
          letter.className = 'letter in';
        }, 340 + i * 80);
      });

      setCurrentWordIndex(nextWordIndex);
    };

    const intervalId = setInterval(rotateText, 4000);

    return () => clearInterval(intervalId);
  }, [currentWordIndex, words.length]);

  return (
    <div className="rotating-text">
      <p>Grow your mind</p>
      <p>
        {words.map((word, index) => (
          <span key={index} className={`word ${word.color}`} style={{ marginLeft: '10px', opacity: index === 0 ? 1 : 0 }}>
            {word.text.split('').map((letter, i) => (
              <span key={i} className="letter">{letter}</span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RotatingText;
