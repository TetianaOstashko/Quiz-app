import React from "react";
import QuizAnswer from "./quizAnswer";
import { useSelector } from "react-redux";

function QuizQuestion({ onOptionClicked }) {
    const question = useSelector(state => state.questions[state.currentQuestion]);

    return (
        <div className="question-card">
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