import React, { useState } from "react";
import { useStudent } from "./context/StudentContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const StudentForm = () => {
    const navigate=useNavigate()
  const { dispatch } = useStudent();
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    studentClass: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_STUDENT", payload: formData });
    navigate('/Card')

    setFormData({ name: "", rollNumber: "", studentClass: "", subject: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Form</h1>
      <label>
        Student Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Roll Number:
        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Student Class:
        <input
          type="text"
          name="studentClass"
          value={formData.studentClass}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
