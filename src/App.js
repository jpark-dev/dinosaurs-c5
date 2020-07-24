import React, { useState } from 'react';
import './App.css';



function App() {
  // declare initial arrays for quiz
  const initialQuizArray = [{question: "What is our mascot?", answers:[{correct: false, text: "Sour Patch Kids"}, {correct: true, text: "Dinasours"}]}];


  // declare state from initial values.
  const [quizArray, setQuiz] = useState(initialQuizArray)

  return (
    <div className="App">
      {/* A quiz can have many questions */}
      {/* A question can have many answers */}
    </div>
  );
}

export default App;
