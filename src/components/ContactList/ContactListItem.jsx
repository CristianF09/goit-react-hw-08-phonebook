import React from 'react';
import { deleteContact } from '../../api';

const ContactListItem = ({ contact }) => {
  const handleDelete = async () => {
    await deleteContact(contact.id);
    // Optionally, trigger a parent update to refresh the contacts
  };

  return (
    <li>
      {contact.name} - {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;