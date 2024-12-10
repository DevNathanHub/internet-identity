import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from './assets/logo.png';
import seal from './assets/seal.png';

const DegreePreview = ({ degree }) => {
  const generatePDF = () => {
    const doc = new jsPDF('landscape');

    // Add logo
    doc.addImage(logo, 'PNG', 20, 15, 60, 30);

    // Add seal
    doc.addImage(seal, 'PNG', 240, 10, 50, 50);

    // Title and Header
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 128); // Dark Blue Color for Pwani University
    doc.text('Pwani University', 140, 60, { align: 'center' });

    doc.setFontSize(18);
    doc.text('Bachelor of Science in Agriculture', 140, 75, { align: 'center' });

    // Certificate Text
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black Color for the text
    doc.text('This is to certify that', 140, 95, { align: 'center' });
    doc.setFontSize(22);
    doc.text(degree.studentName, 140, 105, { align: 'center' });
    doc.setFontSize(16);
    doc.text(`has successfully completed the`, 140, 115, { align: 'center' });
    doc.text(`requirements for the program`, 140, 125, { align: 'center' });
    doc.text(`in ${degree.program}`, 140, 135, { align: 'center' });
    doc.text(`with a GPA of ${degree.gpa}`, 140, 145, { align: 'center' });

    doc.setFontSize(14);
    doc.text(`Given this ${new Date().toLocaleDateString()}.`, 140, 155, { align: 'center' });

    // Signatures
    doc.setFontSize(16);
    doc.text('_________________________', 60, 200);
    doc.text(degree.signature, 60, 210);
    doc.text(degree.title, 60, 220);

    doc.text('_________________________', 200, 200);
    doc.text('Dr. Jane Smith', 200, 210);
    doc.text('Dean of Agriculture', 200, 220);

    // Save PDF
    doc.save('degree_certificate.pdf');
  };

  return (
    <div>
      <h2>Degree Preview</h2>
      <img src={seal} alt="Seal" style={{ width: '100px' }} />
      <img src={logo} alt="Logo" style={{ width: '100px' }} />
      <p><strong>University:</strong> {degree.university}</p>
      <p><strong>Program:</strong> {degree.program}</p>
      <p><strong>Student Name:</strong> {degree.studentName}</p>
      <p><strong>Student ID:</strong> {degree.studentID}</p>
      <p><strong>Graduation Date:</strong> {degree.graduationDate}</p>
      <p><strong>Course Name:</strong> {degree.courseName}</p>
      <p><strong>GPA:</strong> {degree.gpa}</p>
      <p><strong>Signature:</strong> {degree.signature}</p>
      <p><strong>Title:</strong> {degree.title}</p>
      <button onClick={generatePDF}>Download</button>
    </div>
  );
};

export default DegreePreview;
