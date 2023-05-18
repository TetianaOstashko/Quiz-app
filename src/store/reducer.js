const initialState = {
    showResults: false,
    currentQuestion: 0,
    score: 0,
    questions: [
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
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SCORE":
        return { ...state, score: action.payload };

        case "SET_CURRENT_QUESTION":
        return { ...state, currentQuestion: action.payload };

        case "SET_SHOW_RESULTS":
        return { ...state, showResults: action.payload };

        default:
        return state;
    }
};
    
export default reducer;