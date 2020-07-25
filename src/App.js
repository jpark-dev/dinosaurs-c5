import React, { useState } from "react";
import "./App.css";

import AttendeeList from "./components/AttendeeList";

function App() {
  // declare initial array, and a blank question for quiz
  const initialAttendeeList = [
    {
      name: "Joe",
      role: "op",
      email: "email@email.com",
      id: 0,
    },
  ];

  // declare state from initial values.
  const [attendeeList, setAttendeeList] = useState(initialAttendeeList);

  // helper method for adding an attendee
  const addAttendee = () => {
    setAttendeeList([
      ...attendeeList,
      { name: "", role: "", email: "", id: attendeeList.length },
    ]);
  };

  // this method allows me to find a student by it's ID and change that entry in our array.
  const handleSubmit = e => {
    e.preventDefault();
    const newAttendeeList = [...attendeeList];
    const et = e.target;
    const formData = {
      id: et.id.value,
      name: et.name.value,
      role: et.role.value,
      email: et.email.value,
    };
    newAttendeeList[et.id.value] = formData;
    setAttendeeList(newAttendeeList);
  };

  return (
    <div className='App'>
      <AttendeeList array={attendeeList} handleSubmit={handleSubmit} />
      <button onClick={addAttendee}>Add a new attendee!</button>
    </div>
  );
}

export default App;
