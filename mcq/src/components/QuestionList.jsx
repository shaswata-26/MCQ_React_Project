
import React, { useState } from 'react';
import questions from '../data'; 
import Question from './Question';
import Result from './Result';
import './QuestionList.css'; 

const QuestionList = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setCurrentQuestionIndex(questions.length); 
    }
  };

  return (
    <div className="question-list-container">
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default QuestionList;
