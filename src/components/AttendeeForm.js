import React from "react";

export default function AttendeeForm(props) {
  return (
    <form onSubmit={event => props.handleSubmit(event)}>
      <label htmlFor='name'>Attendee Name: </label>
      <input type='text' name='name' />
      <label htmlFor='role'>Role: </label>
      <input type='text' name='role' />
      <label htmlFor='email'>Email: </label>
      <input type='text' name='email'/>
      <input type='hidden' name='id' value={props.id}></input>
      <input type='submit' />
    </form>
  );
}
