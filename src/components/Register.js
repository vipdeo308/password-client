import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await axios.post('http://localhost:3000/api/register', { email:user.email, password:user.password });
      // Handle response, store token, redirect user, etc.
      console.log(response.data);
    } catch (error) {
      setError('Invalid credentials or server error');
    }
    console.log(user);
  };

  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
    {error && <p>{error}</p>}
    </div>
  );
}

export default RegisterPage;
