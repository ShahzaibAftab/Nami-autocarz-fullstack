import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Style/styles.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('https://namiserver.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
          birthday,
        }),
      });

      const responseBody = await response.json();

      if (response.ok) {
        // Signup successful
        console.log('Signup successful:', responseBody);

        const { user } = responseBody
        
        localStorage.setItem('_id', user);

        // Redirect to login or wherever needed
        navigate('/user-dashboard');
      } else {
        // Signup failed
        console.error('Signup error:', responseBody.error);
        // Set the error state to display the error message
        setError(responseBody.error);
      }
    } catch (error) {
      // Unexpected error during signup
      console.error('Unexpected error during signup:', error);
      // Handle unexpected errors
      setError('Unexpected error during signup');
    }
  };

  return (
    <div className="center-container">
      <h1 className="signup-title">Sign Up</h1>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="confirmPassword"></label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="birthday"></label>
      <input
        type="date"
        id="birthday"
        placeholder="Birthday"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
      ></input>
      <br></br>
      {error && <p className="error-message">{error}</p>}<br></br>
      <button className="button-signup" onClick={handleSignup}>
        Sign Up ➜
      </button>
      
      <Link to="/login" className="signup-link">
        <p className="grey-text">Already have an account? Login here</p>
      </Link>
    </div>
  );
};

export default Signup;
