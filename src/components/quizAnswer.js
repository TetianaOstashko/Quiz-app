import React from "react";

function QuizAnswer({ option, onOptionClicked }) {
  return (
    <li onClick={() => onOptionClicked(option.isCorrect)}>
      {option.text}
    </li>
  );
}

export default QuizAnswer;
