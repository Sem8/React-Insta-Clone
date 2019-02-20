import React from 'react';

import PropTypes from 'prop-types';

const SearchBar = props => {
    return (
        <div>          
          <form>
          <input 
          placeholder='Search'
          onSubmit={props.searchAUser} 
          />
          
          </form>          
        </div>

    )
}

export default SearchBar;