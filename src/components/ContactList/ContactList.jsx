import { useSelector } from 'react-redux';

import { ContactElement } from  '../ContactElement/ContactElement'
import { selectActiveContacts } from '../../redux/selectors';


export const ContactList = () => {
  const visibleContacts = useSelector(selectActiveContacts);

  return (
    <>
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactElement key={id} name={name} phone={phone} id={id} />
      ))}
    </ul>
    </>
  );
};