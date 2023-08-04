// src/App.js
import React from 'react';
import Account from './components/Account';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {/* Application title */}
      <h1>Bank Account Application</h1>
      {/* Render the Account component */}
      <Account />
    </div>
  );
}

export default App;
