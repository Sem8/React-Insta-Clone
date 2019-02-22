import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export const UsernameP = styled.p`
    font-size: 22px;
    color: #DC143C;
    padding: 5px;

    &:hover {
      color: #FFC0CB;
      cursor: pointer;
    }
    ${props => 
        props.className === 'likes' && 
        css`        
        margin-left: 50px;    
        font-size: 24px;
        `}

`

export const StyledDiv = styled.div`
  padding: 20px;
  margin: 0 auto;    
`;