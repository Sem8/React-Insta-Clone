import React, { Component } from 'react'
import './App.css';
// import './ig_search_bar.png';      
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';
// import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';

// const authenticate = App => {
//   class extends Component {
//     constructor() {
//       super();
//     }
  
//     render() {
//       return (
//         <div>
//           <PostsPage />
//         </div>
//       )
//     }
//    }
// }

const PageToDisplay = authenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <PageToDisplay />
        <Login />
        <PostsPage />
      </div>
    )
  }
 }

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       instaData: [], 
//       filteredInstaData: [] 
//     };
//   }

//   componentDidMount() {
//     this.setState({ instaData: dummyData });
//   }
  
//   searchInstaUserHandler = e => {
//     // e.preventDefault();
//     const searchedUserName = this.state.instaData.filter(eachInstaDataObj => {
//       if(eachInstaDataObj.username.includes(e.target.value)) {
//         return eachInstaDataObj;
//       }
//     });
//     this.setState({ filteredInstaData: searchedUserName });
//   };
 
//   render() {
//     return (
//       <div className="App">        
//         <SearchBar searchAUser={this.searchInstaUserHandler} />

//         {/* {this.state.instaData.map((eachInstaDataObj, index) => (
//           <PostContainer key={index} allPosts={eachInstaDataObj} />) ) } */}

//           {this.state.filteredInstaData.length > 0 ? this.state.filteredInstaData.map((eachFilteredInstaDataObj, index) =>(
//             <PostContainer key={index} allPosts={eachFilteredInstaDataObj} />
//           )) : this.state.instaData.map((eachInstaDataObj, index) => (
//             <PostContainer key={index} allPosts={eachInstaDataObj} />          
//           ) )}
        
//       </div>
//     );
//   }
// }

App.propTypes = {
  eachInstaDataObj: PropTypes.array,

}

export default App;
// export default PageToDisplay(App)(Login)
