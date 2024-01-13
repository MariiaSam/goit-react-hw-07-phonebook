import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectActiveContacts } from '../../redux/selectors';

import {
  ContactWrap,
  ContactListItem,
  ContactListBtn,
  Span,
} from './ContactList.styled';

export const ContactList = () => {
  const activeContacts = useSelector(selectActiveContacts);
  const dispatch = useDispatch();

  return (
    <ContactWrap>
      {activeContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <Span>{name}:</Span>
            <Span>{number}</Span>

            <ContactListBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ContactListBtn>
          </ContactListItem>
        );
      })}
    </ContactWrap>
  );
};
