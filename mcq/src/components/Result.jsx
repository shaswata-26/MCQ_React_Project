import React from 'react';
import './Result.css';
const Result = ({ score, total }) => {
  return (
    <div className='result-container'>
      <h1>Your Score: {score} / {total}</h1>
      <a href="/">Play Again</a>
    </div>
  );
};

export default Result;
