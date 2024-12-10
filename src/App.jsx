// App.jsx
import React, { useEffect } from 'react';
import { initializeAuth } from './Auth/auth';
import Guest from './Guest';

function App() {
  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <div>
      <h1>Cert Block</h1>
      <Guest/>
    </div>
  );
}

export default App;
