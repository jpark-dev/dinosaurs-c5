import React from "react";

export default function AddButton(props) {
  // helper method for adding an attendee
  const addAttendee = () => {
    props.setAttendeeList([
      ...props.attendeeList,
      { name: "", role: "", email: "", id: props.attendeeList.length },
    ]);
    console.log(props);
    props.setIsFormExist(true);
  };

  return <button onClick={addAttendee}>Add a new attendee!</button>;
}
