import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} onDelete={() => onDelete(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;