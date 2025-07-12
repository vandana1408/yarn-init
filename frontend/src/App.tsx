import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://yarn-start.onrender.com/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching from backend:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Frontend</h1>
        <p>Message from backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
