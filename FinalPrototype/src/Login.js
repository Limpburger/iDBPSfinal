import React, { useState } from 'react';
import auth from './Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is logged in
        const user = userCredential.user;
        console.log('User logged in:', user);
        // Perform any necessary actions after successful login
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error:', error);
      });
  };

  return (
    <div>
        <h2>Login</h2>
        <div>
        <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
        </div>

<div>
<label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
</div>

      <button className='button-19' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
