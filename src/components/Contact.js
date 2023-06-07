import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// import social
import { social } from '../data';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize Firebase (replace with your own Firebase configuration)
    const firebaseConfig = {
      apiKey: "AIzaSyD_nJr3eKoSiZz6_-4ge5vnjvYADF3t7-U",
      authDomain: "webprogram-88e20.firebaseapp.com",
      projectId: "webprogram-88e20",
      storageBucket: "webprogram-88e20.appspot.com",
      messagingSenderId: "213856123976",
      appId: "1:213856123976:web:fb51923de727adf32e6c7d",
      measurementId: "G-MSYWXKHB52"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Add the contact form data to the Firestore collection
    db.collection('contact')
      .add({ fullName, email, message })
      .then(() => {
        // Reset the form fields after successful submission
        setFullName('');
        setEmail('');
        setMessage('');
        console.log('Contact form data added to Firestore');
      })
      .catch((error) => {
        console.error('Error adding contact form data to Firestore: ', error);
      });
  };

  return (
    <section id='contact' className='bg-primary text-white min-h-[732px] section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>Contact us</h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>

        {/* form */}
        <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]' onSubmit={handleSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='Full name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className='form-control'
            type='text'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='textarea'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className='btn bg-accent hover:bg-accent-hover transition-all'>Send Message</button>
        </form>

        {/* social */}
        <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='#' key={index}>
                <img src={item.icon}></img>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
