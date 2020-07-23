import React, { useState } from 'react';
import './App.css';

function App() {
  // declare initial arrays for students or teachers
  const initialStudentArray = [{name: 'Joe', year: 'Freshman'}];
  const initialFacultyArray = [{title: 'Professor', subject: 'Math', name: 'Robert'}];

  // declare state from initial values.
  const [students, setStudents] = useState(initialStudentArray);
  const [faculty, setFaculty] = useState(initialFacultyArray);

  return (
    <div className="App">
      // make array mapper for faculty and students.
      // make a form to add a student
      // make a form to add a teacher
    </div>
  );
}

export default App;
