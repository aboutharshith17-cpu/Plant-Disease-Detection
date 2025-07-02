import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    setError("Phone number must be exactly 10 digits.");
    return;
  }

  setError('');

  try {
    const response = await fetch('http://localhost:8085/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: name,
        phone: phone,
        password: password
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      setError(errorData.message || 'Failed to register.');
    } else {
      const data = await response.json();
      console.log('User registered:', data);
      alert('Account created successfully!');
      navigate('/login');
    }
  } catch (error) {
    console.error('Registration error:', error);
    setError('Something went wrong. Please try again later.');
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              required
              pattern="\d{10}"
              maxLength="10"
              inputMode="numeric"
              style={styles.input}
              placeholder="Enter 10-digit number"
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
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Create Account</button>
        </form>
        <p style={styles.loginText}>
          Already have an account? <Link to="/login" style={styles.link}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4'
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
  button: {
    padding: 10,
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  loginText: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: -6,
    marginBottom: 6,
    textAlign: 'center'
  }
};

export default SignupPage;
