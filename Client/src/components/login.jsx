import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Style/styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // New state for error message
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://namiserver.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const responseBody = await response.json();

      if (response.ok) {
        console.log('Login successful:', responseBody);
        const { user } = responseBody


        localStorage.setItem('_id', user);
        // Check the role and navigate accordingly
        if (responseBody.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
      } else {
        console.error('Login error:', responseBody.error);
        setError(responseBody.error); // Set error state
      }
    } catch (error) {
      console.error('Unexpected error during login:', error);
      setError('Unexpected error during login'); // Set error state
    }
  };

  return (
    <div className="center-container">
      <h1 className="login-title">ED OP Online</h1>
      <h2 className="subtitle">Login: </h2>
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
      {error && <p className="error-message">{error}</p>}<br></br>
      <button className="button-login" onClick={handleLogin}>
        Login ➜
      </button>

      <Link to="/signup" className="signup-link">
        <p className="grey-text">New? Create an account here</p>
      </Link>
    </div>
  );
};

export default Login;
