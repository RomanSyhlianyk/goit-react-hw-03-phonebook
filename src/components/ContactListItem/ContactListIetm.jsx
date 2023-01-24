import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

export const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};