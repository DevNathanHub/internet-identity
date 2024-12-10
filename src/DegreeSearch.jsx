import React, { useState } from 'react';

const DegreeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <h2>Search Degree</h2>
      <input
        type="text"
        placeholder="Enter Student ID or Principal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default DegreeSearch;
