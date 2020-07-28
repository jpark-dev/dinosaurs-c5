import React from "react";

export default function AttendeeForm(props) {
  console.log(props);
  if (!props.isFormExist) {
    return <></>;
  }

  return (
    <form onSubmit={e => props.handleSubmit(e)}>
      <label htmlFor='name'>Attendee Name: </label>
      <input type='text' name='name' />
      <label htmlFor='role'>Role: </label>
      <input type='text' name='role' />
      <label htmlFor='email'>Email: </label>
      <input type='text' name='email' />
      <input
        type='button'
        value='cancel'
        onClick={e => props.deleteForm(props.id)}
      />
      <input type='hidden' name='id' value={props.id}></input>
      <input type='submit' />
    </form>
  );
}
