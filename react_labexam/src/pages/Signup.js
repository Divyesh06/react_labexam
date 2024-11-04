import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    
    if (response.ok) {
        navigate('/home');
    }

    else {
        alert("Login failed for some reason")
    }

    const result = await response.json();
    
  };

  return (
    <div>
      <h2>Signup</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSignup}>Signup</button>
      <NavLink to="/">Login to existing account</NavLink>
    </div>
  );
}

export default Signup;


