import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contactName, contactNumber }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contactName));
  return (
    <li className={css.contact}>
      <p>
        {contactName}: {contactNumber}
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
