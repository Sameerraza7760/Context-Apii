import React from 'react';
import { useStudent } from './context/StudentContext';

const StudentCard = () => {
  const { state } = useStudent();
  const { students } = state;

  return (
    <div>
      <h2>Student Cards</h2>
      {students.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <p>Roll Number: {student.rollNumber}</p>
          <p>Class: {student.studentClass}</p>
          <p>Subject: {student.subject}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default StudentCard;