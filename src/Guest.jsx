import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import DegreePreview from './DegreePreview';

const Guest = () => {
  const [degree, setDegree] = useState({ 
    university: "Pwani University", 
    program: "Bachelor of Science in Agriculture", 
    studentName: "John Doe", 
    studentID: "PU123456", 
    graduationDate: "2024-06-15", 
    courseName: "Computer Science", 
    gpa: 3.75, 
    signature: "Dr. Jane Smith", 
    title: "Dean of Agriculture", 
    seal: "Pwani University Seal"
  });

  const generatePDFWithWatermark = () => {
    const doc = new jsPDF();
    doc.text('Degree Certificate', 20, 10);
    doc.autoTable({
      head: [['Field', 'Value']],
      body: [
        ['University', degree.university],
        ['Program', degree.program],
        ['Student Name', degree.studentName],
        ['Student ID', degree.studentID],
        ['Graduation Date', degree.graduationDate],
        ['Course Name', degree.courseName],
        ['GPA', degree.gpa],
        ['Signature', degree.signature],
        ['Title', degree.title],
        ['Seal', degree.seal],
      ],
    });
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('On-Chain Verification Required', 20, 50, { angle: 45, align: 'center', maxWidth: 500 });
    doc.text('On-Chain Verification Required', 20, 90, { angle: 45, align: 'center', maxWidth: 500 });
    doc.text('On-Chain Verification Required', 20, 130, { angle: 45, align: 'center', maxWidth: 500 });
    doc.text('On-Chain Verification Required', 20, 170, { angle: 45, align: 'center', maxWidth: 500 });
    doc.text('On-Chain Verification Required', 20, 210, { angle: 45, align: 'center', maxWidth: 500 });
    doc.text('On-Chain Verification Required', 20, 250, { angle: 45, align: 'center', maxWidth: 500 });
    doc.save('degree_certificate_with_watermark.pdf');
  };

  return (
    <div>
      <h1>Guest Dashboard</h1>
      <DegreePreview degree={degree} />
      <button onClick={generatePDFWithWatermark}>Download with Watermark</button>
    </div>
  );
};

export default Guest;
