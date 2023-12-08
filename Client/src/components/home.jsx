import React from 'react';
import '../assets/Style/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="center-container">
      <h1 className="title">ED OP Online</h1>
      <p className="description">
        Connecting students with education-based opportunities like scholarships or student-employment positions.
      </p>
      <Link to="/login">
        <button className="button-login">Sign In</button>
      </Link>
      <footer>
        <p className="footer">© Copyright 2023 CSCE490 Nami Group</p>
      </footer>
    </div>
  );
};

export default Home;
