import React, { Component } from 'react';

import dummyData from '../dummy-data';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components'

class PostsPage extends Component {
    constructor(){
      super();
      this.state = {
        instaData: [], 
        filteredInstaData: [] 
      };
    }
  
    componentDidMount() {
      this.setState({ instaData: dummyData });
    }
    
    searchInstaUserHandler = e => {
      // e.preventDefault();
      const searchedUserName = this.state.instaData.filter(eachInstaDataObj => {
        if(eachInstaDataObj.username.includes(e.target.value)) {
          return eachInstaDataObj;
        }
      });
      this.setState({ filteredInstaData: searchedUserName });
    };
   
    render() {
      return (
        <div className="App">        
          <SearchBar searchAUser={this.searchInstaUserHandler} />
  
          {/* {this.state.instaData.map((eachInstaDataObj, index) => (
            <PostContainer key={index} allPosts={eachInstaDataObj} />) ) } */}
            
            {this.state.filteredInstaData.length > 0 ? this.state.filteredInstaData.map((eachFilteredInstaDataObj, index) =>(
              <PostContainer key={index} allPosts={eachFilteredInstaDataObj} />
            )) : this.state.instaData.map((eachInstaDataObj, index) => (
              <PostContainer key={index} allPosts={eachInstaDataObj} />          
            ) )}
          
        </div>
      );
    }
  }

  export default PostsPage;