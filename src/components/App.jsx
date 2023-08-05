import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { useContacts } from './hooks/useContact';
import style from './App.module.css';
import React, { useState } from 'react';

const App = () => {
  const { contacts, addContact, deleteContact } = useContacts();
  const [filter, setFilter] = useState('');

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterItems = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filterItems()} toDelete={deleteContact} />
    </div>
  );
};

export default App;
