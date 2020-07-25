import React from "react";

export default function Attendee(props) {
  const { name, role, email } = props.info;
  return (
    <div className='attendee'>
      <p>
        <b>Name:</b> {name} <b>Role:</b> {role} <b>Email:</b> {email}
      </p>
    </div>
  );
}
