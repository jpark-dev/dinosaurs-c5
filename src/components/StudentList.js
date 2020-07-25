import React from 'react';

import Student from './Student';
import StudentForm from './StudentForm';

const StudentList = props => {
    const studentMapper = array => {
        return array.map((student, index) => {
            if (student.name === '') {
                return <StudentForm key={index} id={student.id} handleSubmit={props.handleSubmit} />
            } else {
                return <Student key={index} info={student} />
            }
        })
    }

    return (
        <>
        {studentMapper(props.array)}
        </>
    );
}

export default StudentList;
