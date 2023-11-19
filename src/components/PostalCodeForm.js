import React, { useState } from 'react';
import { ReactComponent as SearchIcon} from '../assets/charm_search.svg'

const PostalCodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='search-elements'>
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button type="submit">
        <SearchIcon className='search-icon'/>
      </button>
      </div>
    </form>
  );
};

export default PostalCodeForm;
