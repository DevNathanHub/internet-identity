// src/components/pages/AddDegree.js
import React, { useState } from 'react';
import mockDegrees from './mockDegrees';

const AddDegree = ({ principal }) => {
  const [degree, setDegree] = useState({
    university: "Pwani University",
    program: "",
    studentName: "",
    studentID: "",
    graduationDate: "",
    courseName: "",
    gpa: 0,
    signature: "Dr. Jane Smith",
    title: "Dean of Agriculture",
    seal: "Pwani University Seal",
    principal: principal
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDegree({ ...degree, [name]: value });
  };

  const handleAddDegree = () => {
    mockDegrees.push(degree);
    alert('Degree issued successfully');
  };

  if (principal !== 'institution-principal') {
    return <p>Only the institution principal can issue degrees.</p>;
  }

  return (
    <div>
      <h2>Add Degree</h2>
      <form>
        <input type="text" name="program" placeholder="Program" value={degree.program} onChange={handleChange} />
        <input type="text" name="studentName" placeholder="Student Name" value={degree.studentName} onChange={handleChange} />
        <input type="text" name="studentID" placeholder="Student ID" value={degree.studentID} onChange={handleChange} />
        <input type="date" name="graduationDate" placeholder="Graduation Date" value={degree.graduationDate} onChange={handleChange} />
        <input type="text" name="courseName" placeholder="Course Name" value={degree.courseName} onChange={handleChange} />
        <input type="number" name="gpa" placeholder="GPA" value={degree.gpa} onChange={handleChange} />
        <button type="button" onClick={handleAddDegree}>Add Degree</button>
      </form>
    </div>
  );
};

export default AddDegree;
