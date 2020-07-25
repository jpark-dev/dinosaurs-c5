import React from 'react';

const Student = (props) => {
    const { name, grade } = props.info;
    return (
        <div className="student">
            <p><b>Name:</b> {name} <b>Grade:</b> {grade}</p>
        </div>
    );
}

export default Student;
