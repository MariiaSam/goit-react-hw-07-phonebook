import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts, selectIsLoading, selectActiveContacts } from '../redux/selectors';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsTitle } from './ContactsTitle/ContactsTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { fetchContacts } from '../redux/сontactsOperations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const activeContacts = useSelector(selectActiveContacts);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchContacts())
  }, [dispatch])

return (
  <div>
    <Section title="Phonebook">
      <ContactForm />
      <ContactsTitle title="Contacts" />
      <Filter />
      {contacts.length > 0 && activeContacts.length === 0 && (
        <Error message={'Nothing was found for this name'} />
      )}
      {contacts.length === 0 && !isLoading && (
        <Error message={'No contacts in your phone'} />
      )}
      {isLoading && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </Section>
  </div>
);}