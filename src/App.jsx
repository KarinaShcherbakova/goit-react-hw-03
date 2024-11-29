import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
 
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : []; 
  });

  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts)); 
    }
  }, [contacts]); 

  
  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  
  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <h1>Phonebook</h1>
      <div className={styles.formContainer}>
        <ContactForm onSubmit={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
      </div>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;