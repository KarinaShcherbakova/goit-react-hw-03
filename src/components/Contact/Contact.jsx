import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <p>{name}: {number}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;