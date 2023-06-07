import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Subscribe = () => {
  const [email, setEmail] = useState("");

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

    // Add the email address to the Firestore collection
    db.collection("news")
      .add({ email })
      .then(() => {
        // Reset the email field after successful submission
        setEmail("");
        console.log("Email address added to Firestore");
      })
      .catch((error) => {
        console.error("Error adding email address to Firestore: ", error);
      });
  };

  return (
    <section className="bg-accent pt-[54px] pb-[74px] min-h-[300px]">
      <div className="container mx-auto px-8 text-center">
        <h3 className="font-primary font-extrabold leading-[1.2] text-white text-[40px] mb-[12px]">
          Subscribe to our newsletter
        </h3>
        <p className="mb-[40px] text-white text-sm">İlk duyan siz olun.</p>
        <form
          className="max-w-[600px] mx-auto flex flex-col lg:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-4">
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
