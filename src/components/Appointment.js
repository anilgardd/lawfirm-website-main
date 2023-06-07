import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const Appointment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
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

    // Add the values to the Firestore collection
    db.collection("appointment").add({
      name,
      phone,
      email,
      message,
    })
      .then(() => {
        // Reset the form fields after successful submission
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        console.log("Appointment added to Firestore");
      })
      .catch((error) => {
        console.error("Error adding appointment to Firestore: ", error);
      });
  };

  return (
    <div className="bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto">
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Başvuru Oluşturun
      </h3>
      {/* bar */}
      <div className="w-[54px] h-[3px] bg-white my-6 mx-auto"></div>
      {/* input group */}
      <div className="space-y-[24px]">
        <input
          className="form-control"
          placeholder="Adınız Soyadınız"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Telefon Numaranız"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Email Adresiniz"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary"
          placeholder="Mesajınızı Yazınız"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* Button */}
        <button
          className="btn bg-primary hover:bg-primary-hover transition-all"
          onClick={handleSubmit}
        >
          Başvuru Oluştur
        </button>
      </div>
    </div>
  );
};

export default Appointment;
