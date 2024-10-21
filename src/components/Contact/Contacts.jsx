import React, { useEffect, useState } from 'react';
import { getContacts } from '../../api';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  const handleContactAdded = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h2>Your Contacts</h2>
      <ContactForm onContactAdded={handleContactAdded} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;