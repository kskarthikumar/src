import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/Login'

function App() {
  const title = (
    <h1 className="page-title">Login first!</h1>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
      <section>
        {title}
        <Login />
      </section>
    </div>
  );
}

export default App;
