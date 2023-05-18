import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizQuestion from "./components/quizQuestion";
import { setScore, setCurrentQuestion, setShowResults } from "./store/actions";
import "./App.css";

function App() {
  const showResults = useSelector(state => state.showResults);
  const currentQuestion = useSelector(state => state.currentQuestion);
  const score = useSelector(state => state.score);

  const questions = [
    {
      id: 0,
      text: "Which language has the more native speakers: English or Spanish?",
      options: [
        { id: 0, text: "English", isCorrect: false },
        { id: 1, text: "Spanish", isCorrect: true },
        { id: 2, text: "Danish", isCorrect: false },
        { id: 3, text: "Ukrainian", isCorrect: false },
      ],
    },
    
    {
      id: 1,
      text: "How many hearts does an octopus have?",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "3", isCorrect: true },
      ],
    },

    {
      id: 2,
      text: "What is the capital of Ukraine?",
      options: [
        { id: 0, text: "Dublin", isCorrect: false },
        { id: 1, text: "Copenhagen", isCorrect: false },
        { id: 2, text: "Kyiv", isCorrect: true },
        { id: 3, text: "London", isCorrect: false },
      ],
    },

    {
      id: 3,
      text: "Pink Ladies and Granny Smiths are types of what fruit?",
      options: [
        { id: 0, text: "Plums", isCorrect: false },
        { id: 1, text: "Apples", isCorrect: true },
        { id: 2, text: "Bananas", isCorrect: false },
        { id: 3, text: "Peaches", isCorrect: false },
      ],
    },

    {
      id: 4,
      text: "Where is Disney's European theme park located?",
      options: [
        { id: 0, text: "Berlin", isCorrect: false },
        { id: 1, text: "Barcelona", isCorrect: false },
        { id: 2, text: "Paris", isCorrect: true },
        { id: 3, text: "Helsinki", isCorrect: false },
      ],
    },

  ];

  const dispatch = useDispatch();

  const handleOptionClicked = (isCorrect) => {
    if (isCorrect) {
      dispatch(setScore(score + 1));
    }
    if (currentQuestion + 1 < questions.length) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
    } else {
      dispatch(setShowResults(true));
    }
  };

  const restartGame = () => {
    dispatch(setScore(0));
    dispatch(setCurrentQuestion(0));
    dispatch(setShowResults(false));
  };

  return (
    <div className="App">
      <h1>Quiz</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
          {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
          </h2>
          <button onClick={restartGame}>Restart game</button>
        </div>
      ) : (
        <QuizQuestion
          question={questions[currentQuestion]}
          onOptionClicked={handleOptionClicked}
        />
      )}
    </div>
  );
}
    
export default App;

