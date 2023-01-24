import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ onChange }) => {
  return (
    
      <div className={css.box}>
        <p>Find contact by name:</p>
        <label htmlFor="">
          <input
            className={css.input}
            type="search"
            name="filter"
            onChange={onChange}
          />
        </label>
      </div>
    
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
