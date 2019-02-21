import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


export const StyledHeader = styled.header`
  background:	#FFEFD5;
  display: flex;
  margin: 0 auto;
  align-items: center

`;

export const styledForm = styled.form`
  background:	#FFB6C1;
`;

export const StyledInput = styled.input`
  background:	#FFC0CB;
  border: none;
  padding: 10px;  
  margin: 10px;
  font-size: 16px;
  border-radius: 20px;
`;

export const Styledh2 = styled.h2`
  color: #DC143C;
  padding: 20px;
  margin: 0 auto;
  font-family: cursive, sans-serif;

`;

const SearchBar = props => {
    return (
        <StyledHeader>
          <Styledh2>Instagram</Styledh2>          
          <styledForm>
            <StyledInput
              placeholder='Search'
              onClick={props.searchAUser} />
          </styledForm>                     
                   
        </StyledHeader>

    )
}

export default SearchBar;