import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Usercontext'; 
import logo from "../components/assets/raw.png";

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser(); 

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 10) {
      setPhone(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8085/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone,
          password
        })
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Login successful:", userData);
        alert("Login successful!");
        setUser(userData); // Save user to context
        navigate('/');
      } else {
        const message = await response.text();
        alert("Login failed: " + message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes rainbowFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 1000% 50%; }
          }

          .rainbow-button {
            background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet, red);
            background-size: 1000% 100%;
            animation: rainbowFlow 2s linear infinite;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            text-shadow: 0 0 3px #000;
            transition: transform 0.2s ease-in-out;
          }

          .rainbow-button:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.card_sub}>
            <img src={logo} className="logo" alt="Logo" />
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label>
              Phone Number
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                required
                style={styles.input}
                placeholder="10-digit phone number"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
              />
            </label>
            <button type="submit" style={styles.button}>Login</button>
          </form>
          <p style={styles.signupText}>
            Don’t have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4'
  },
  button: {
    padding: 10,
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  card: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '320px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },
  input: {
    width: '100%',
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
    border: '1px solid #ccc'
  },
  signupText: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  },
  card_sub: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around"
  }
};

export default LoginPage;
