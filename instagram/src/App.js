import React, { Component } from 'react'
import './App.css';
// import './ig_search_bar.png';
      
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';



class App extends Component {
  constructor(){
    super();
    this.state = {
      instaData: dummyData
    };
  }
 
  render() {
    return (
      <div className="App">
        <div> 
          {/* <img src='/ig_search_bar.png' /> */}
          
          <form>
          <input placeholder='Search'>
          </input>
          </form>
          
        </div>        
        {this.state.instaData.map((eachInstaDataObj, index) => (
          <PostContainer key={index} allPosts={eachInstaDataObj} />
        )
          
        )}
        
      </div>
    );
  }
}

App.propTypes = {
  eachInstaDataObj: PropTypes.array,

}

export default App;
