import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Card from './pages/Card';
import './index.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/card" className="nav-link">Card</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
