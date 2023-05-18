export const setScore = (score) => ({
    type: "SET_SCORE",
    payload: score,
});
    
export const setCurrentQuestion = (question) => ({
    type: "SET_CURRENT_QUESTION",
    payload: question,
});
    
export const setShowResults = (showResults) => ({
    type: "SET_SHOW_RESULTS",
    payload: showResults,
});