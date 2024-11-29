import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot exceed 50 characters')
    .required('Number is required'),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        onSubmit(newContact);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;