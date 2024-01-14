import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { deleteContact } from '../../redux/сontactsOperations';
import { selectIsDeleting } from '../../redux/selectors';

import { ContactElementBtn } from './ContactElement.styled';

import { Report } from 'notiflix/build/notiflix-report-aio';



export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const [deleteButton, setDeleteButton] = useState('Delete');

  const handleDeleteBtn = id => {
    setDeleteButton('In process');
    Report.failure(
      'Notiflix Failure',
      `${name} number removed from the contact list!`,
      'Okay',
      );
    dispatch(deleteContact(id)).then(() => {
      setDeleteButton('Delete');
    });
  };

  return (
    <>
      <li>
        {' '}
        {name}: {phone}
        <ContactElementBtn
          type="button"
          disabled={isDeleting}
          onClick={() => handleDeleteBtn(id)}
        >
          {deleteButton}
        </ContactElementBtn>
      </li>
    </>
  );
};