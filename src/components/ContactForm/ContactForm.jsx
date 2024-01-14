import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/сontactsOperations';

import {
  FormStyled,
  FieldStyled,
  Message,
  Label,
  Button,
} from './ContactForm.styled';

const schema = object().shape({
  name: string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, 'Invalid name format')
    .required('This field is required'),
  number: string()
    .trim()
    .matches(
      /^[^a-zA-Z]*\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}[^a-zA-Z]*$/,
      'Invalid phone number format'
    )
    .required('This field is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}

      onSubmit={({ name, number }, actions) => {
        const existingName = contacts.find(
          ({ name: oldName }) => oldName && oldName.toLowerCase() === name.toLowerCase()
        );
      
        const existingNumber = contacts.find(
          ({ number: oldNumber }) => oldNumber && oldNumber.toLowerCase() === number.toLowerCase()
        );
      
        if (existingName || existingNumber) {
          if (existingName) {
            alert(`${name} already in contacts`);
          }
          if (existingNumber) {
            alert(`${number} already in contacts`);
          }
          actions.resetForm();
          return;
        }
      
        alert(`${name} added to your contacts list`);
        dispatch(addContact({ name, phone: number }));
        actions.resetForm();
      }}
    >
      <FormStyled>
        <div>
          <Label htmlFor="name">Please, enter name</Label>

          <FieldStyled type="text" name="name" placeholder=" " />
          <Message name="name" component="div"></Message>
        </div>
        <div>
          <Label htmlFor="name">Please, enter number</Label>

          <FieldStyled type="text" name="number" placeholder=" " />
          <Message name="number" component="div"></Message>
        </div>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
