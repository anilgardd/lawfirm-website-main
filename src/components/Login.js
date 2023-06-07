import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const adminRef = firebase.firestore().collection('admin');
        const adminQuerySnapshot = await adminRef
          .where('email', '==', email)
          .where('password', '==', password)
          .get();
  
        if (!adminQuerySnapshot.empty) {
          console.log('User is an admin');
          handleLogin(email, password)
          .then(() => {
          })
          .catch((error) => {
            console.error('Login error:', error);
            setErrorMessage(error.message);
          });
        } else {
          console.log('User is not an admin');
        }
      } catch (error) {
        console.error('Login error:', error);
        setErrorMessage('An error occurred during login.');
      }
    };


  return (
    <header className="bg-primary-darker py-[24px] py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white">Admin Login</h2>
        <form onSubmit={handleLogin} className="mt-4">
          <input
            className="w-64 mb-2 px-4 py-2 rounded border-gray-300"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-64 mb-2 px-4 py-2 rounded border-gray-300"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </header>
  );
};

export default Login;
