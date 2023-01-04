import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Exec from './pages/exec.js';
import Resources from './pages/resources.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <div>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact component={Home} /> 
      <Route path='/exec' component={Exec} />
      <Route path='/resources' component={Resources} />
      <Route path='/contact' component={Contact} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
