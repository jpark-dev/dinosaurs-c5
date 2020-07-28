import React from "react";

import AttendeeForm from "./AttendeeForm";
import Attendee from "./Attendee";

export default function AttendeeList(props) {
  const attendeeMapper = array => {
    return array.map((attendee, index) => {
      if (attendee.name === "") {
        return (
          <AttendeeForm
            key={index}
            id={attendee.id}
            handleSubmit={props.handleSubmit}
            deleteForm={props.deleteForm}
            isFormExist={props.isFormExist}
          />
        );
      } else {
        return <Attendee key={index} info={attendee} />;
      }
    });
  };

  return <>{attendeeMapper(props.array)}</>;
}
