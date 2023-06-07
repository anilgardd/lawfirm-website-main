import React, {useState} from 'react';

import Banner from './components/Banner';
import Login from './components/Login';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Team from './components/Team';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AdminPage from './components/AdminPage';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

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

// Access Firestore and Authentication services
const db = firebase.firestore();
const auth = firebase.auth();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <AdminPage />
          <Footer />
        </>
      ) : (
        <>
          <Banner />
          <Testimonials />
          <Skills />
          <Team />
          <Subscribe />
          <Contact />
          <Login handleLogin={handleLogin} />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
};


export default App;
