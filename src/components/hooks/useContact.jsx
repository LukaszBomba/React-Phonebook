import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useContacts = () => {
  const contactsSaved = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    JSON.parse(contactsSaved) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const toLowerCase = name.toLowerCase();

    let nameOntheList = false;

    const newContact = { id: nanoid(), name: name, number: number };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === toLowerCase) {
        alert(`${contact.name} is already in contacts`);
        nameOntheList = true;
      }
    });

    if (nameOntheList) return;

    setContacts(prevState => prevState.concat(newContact));
  };

  const deleteContact = idToDelete => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idToDelete)
    );
  };

  return {
    contacts,
    addContact,
    deleteContact,
  };
};
