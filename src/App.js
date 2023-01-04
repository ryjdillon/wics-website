import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './pages';
import Exec from './pages/exec';
import Resources from './pages/resources';
import Contact from './pages/contact';

function App() {
  return (
    <div>
  <Router>
    <Navbar />
    <Routes>
      {/* <Route path='/' exact component={Home} /> */}
      <Route path='/exec' component={Exec} />
      <Route path='/resources' component={Resources} />
      <Route path='/contact' component={Contact} />
    </Routes>
  </Router>

  <div className="App">
      <header className="App-header">
      </header>
      <div className="title">
        <h1>WPI Women in Computer Science</h1>
      </div>
      <div>
        <p>
          Women in Computer Science (WiCS) at Worcester Polytechnic Institute is a student run organization on campus with the goal of supporting as many students as possible. 
          We aim to aid in classes and relieving stress, as well as creating lasting friendships on campus. WiCS is here to support students' studies, 
          opportunities, friendships, and their overall college experiences. We are here to help educate and promote women in computer science and related fields. 
          To do this, we host events that connect students to professional opportunities, bring companies to campus, prepare them for classes, 
          give them resources, as well as host coding competitions, professional workshops, movie nights, and provide upperclassmen help.
        </p>
      </div>
    </div>
  </div>
  );
}

export default App;
