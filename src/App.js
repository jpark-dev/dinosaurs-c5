import React, { useState } from "react";
import "./App.css";

import AttendeeList from "./components/AttendeeList";
import Header from "./components/Header";
import AddButton from "./components/AddButton";

export default function App() {
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
  const [isFormExist, setIsFormExist] = useState(false);

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
    setIsFormExist(false);
  };
  const deleteForm = id => {
    console.log(attendeeList);
    const hehe = attendeeList.splice(id - 1, 1);
    setAttendeeList(attendeeList, hehe);
    setIsFormExist(false);
  };

  return (
    <div className='App'>
      <Header />
      {!isFormExist && (
        <AddButton
          attendeeList={attendeeList}
          setAttendeeList={setAttendeeList}
          setIsFormExist={setIsFormExist}
        />
      )}

      <AttendeeList
        array={attendeeList}
        handleSubmit={handleSubmit}
        deleteForm={deleteForm}
        isFormExist={isFormExist}
      />
    </div>
  );
}
