import React from "react";
import QuizAnswer from "./quizAnswer";

function QuizQuestion({ question, onOptionClicked }) {
  return (
    <div className="question-card">
      {/*<h2>Question: {question.id + 1} out of {question.totalQuestions}</h2>*/}
      <h3 className="question-text">{question.text}</h3>
      <ul>
        {question.options.map((option) => (
          <QuizAnswer
            key={option.id}
            option={option}
            onOptionClicked={onOptionClicked}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestion;
