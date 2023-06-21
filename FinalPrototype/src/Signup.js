import React, { useState } from 'react';
import auth from './Auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User creation successful
        const user = userCredential.user;
        console.log('User created:', user);
        // You can store additional user data or perform other actions here
      })
      .catch((error) => {
        // User creation failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating user:', errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='button-19' 
        type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
