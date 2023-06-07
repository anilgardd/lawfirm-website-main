import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsRef = firebase.firestore().collection('appointment');
        const snapshot = await appointmentsRef.get();
        const fetchedAppointments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    const fetchContacts = async () => {
      try {
        const contactsRef = firebase.firestore().collection('contact');
        const snapshot = await contactsRef.get();
        const fetchedContacts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchAppointments();
    fetchContacts();
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Admin Page
      </h2>

      <div>
        <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Appointments</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              style={{ marginBottom: '8px', lineHeight: '1.5' }}
            >
              <strong>Name:</strong> {appointment.name},{' '}
              <strong>Email:</strong> {appointment.email},{' '}
              <strong>Phone:</strong> {appointment.phone},{' '}
              <strong>Message:</strong> {appointment.message}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Contacts</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              style={{ marginBottom: '8px', lineHeight: '1.5' }}
            >
              <strong>Full Name:</strong> {contact.fullName},{' '}
              <strong>Email:</strong> {contact.email},{' '}
              <strong>Message:</strong> {contact.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};

export default AdminPage;
