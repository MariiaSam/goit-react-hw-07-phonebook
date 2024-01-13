import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsTitle } from './ContactsTitle/ContactsTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
        {contacts.lengtg > 0 && (
          <>
            <ContactsTitle title="Contacts" />
          </>
        )}
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
