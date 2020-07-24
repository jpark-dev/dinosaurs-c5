import React from 'react';

const StudentForm = (props) => {
    return (
        <form onSubmit={(event) => props.handleSubmit(event)}>
            <label htmlFor="name">Student Name: </label>
            <input type="text" name="name" />
            <label htmlFor="grade">Grade: </label>
            <input type="number" name="grade" />
            <input type="hidden" name="id" value={props.id} ></input>
            <input type="submit" />
        </form>
    );
}

export default StudentForm;
