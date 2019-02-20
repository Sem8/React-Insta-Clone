import React, { Component } from 'react'
import './App.css';
// import './ig_search_bar.png';
      
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
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
        {/* <div>          
          <form>
          <input placeholder='Search'>
          </input>
          </form>          
        </div>         */}
        <SearchBar searchAUser={this.searchInstaUserHandler} />

        {/* {this.state.instaData.map((eachInstaDataObj, index) => (
          <PostContainer key={index} allPosts={eachInstaDataObj} />          
        )          
        )} */}
          {this.state.filteredInstaData.length > 0 ? this.state.filteredInstaData.map((eachFilteredInstaDataObj, index) =>(
            <PostContainer key={index} allPosts={eachFilteredInstaDataObj} />
          )) : this.state.instaData.map((eachInstaDataObj, index) => (
            <PostContainer key={index} allPosts={eachInstaDataObj} />          
          ) )}
        
      </div>
    );
  }
}

App.propTypes = {
  eachInstaDataObj: PropTypes.array,

}

export default App;
