import React, { Component } from 'react'
import './App.css';

import PropTypes from 'prop-types';

import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';
import styled from 'styled-components'

const PageToDisplay = authenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();    
  }

  render() {
    return (
      <div>
        <PageToDisplay />       
      </div>
    )
  }
 }


App.propTypes = {
  eachInstaDataObj: PropTypes.array
}

export default App;

