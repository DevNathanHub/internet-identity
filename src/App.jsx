import React, { useEffect, useState } from 'react';
import DegreePreview from './DegreePreview';
import DegreeSearch from './DegreeSearch';
import mockDegrees from './mockDegrees';
import AddDegree from './AddDegree';
import  { initializeAuth } from './Auth/auth';
const App = () => {
  const principal = "institution-principal";

  
  const [selectedDegree, setSelectedDegree] = useState(null);

  const handleSearch = (searchTerm) => {
    const foundDegree = mockDegrees.find(
      (degree) => degree.studentID === searchTerm || degree.principal === searchTerm
    );
    setSelectedDegree(foundDegree);
  };
  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <div>
      <h1>Degree Management System</h1>
      <DegreeSearch onSearch={handleSearch} />
      {selectedDegree ? (
        <DegreePreview degree={selectedDegree} />
      ) : (
        <p>No degree found for the provided search term.</p>
      )}
      <AddDegree principal={principal}/>
    </div>
  );
};

export default App;
