// App.jsx
import React, { useEffect } from 'react';
import { initializeAuth } from './Auth/auth';

function App() {
  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <div>App</div>
  );
}

export default App;
