import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListIetm';
import css from './ContactList.module.css'

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {filteredContacts().map(({ name, id, number }) => {
        const deleteContact = () => {
          onDelete(id);
        };
        return (
          <ContactListItem
            name={name}
            key={id}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
