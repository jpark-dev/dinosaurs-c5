import React, { useState } from 'react';
import './App.css';

import StudentList from './components/StudentList';

function App() {
  // declare initial array, and a blank question for quiz
  const initialStudent = [{
    name: 'Joe', 
    grade: 12,
    id: 0
  }];

  // declare state from initial values.
  const [ students, setStudents ] = useState(initialStudent);

  // helper method for adding a student
  const addStudent = () =>{
    setStudents([...students, {name: '', grade: 0, id: students.length}])
  };

  // this method allows me to find a student by it's ID and change that entry in our array.
  const handleSubmit = event => {
    event.preventDefault();
    const newStudents = [...students];
    const fields = {
      id: event.target.id.value,
      name: event.target.name.value,
      grade: event.target.grade.value
    };
    newStudents[event.target.id.value] = fields;
    setStudents(newStudents)
  };

  return (
    <div className="App">
      <StudentList array={students} handleSubmit={handleSubmit} />
      <button onClick={addStudent}>Add a Student!</button>
    </div>
  );
}

export default App;
