import React, { Component } from 'react'
import './App.css';
      
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';


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
        {this.state.instaData.map((eachInstaDataObj, index) => (
          <PostContainer key={index} allPosts={eachInstaDataObj} />
        )
          
        )}
        
      </div>
    );
  }
}

export default App;
