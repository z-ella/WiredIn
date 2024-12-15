import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Jobs from "./Jobs";

const App = () => {
  return (
    <Router>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Job Portal
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/jobs" className="navbar-item">Jobs</Link>
            <Link to="/about" className="navbar-item">About</Link>
          </div>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
};

export default App;
