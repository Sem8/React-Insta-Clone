import React, { Component } from 'react';

import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


// const PostContainer = props => {
//     // console.log(props);
//     return (
//         <div className='wholePostContainer'>
//             <div className='topHeader'>
//             <img src={props.allPosts.thumbnailUrl} alt={props.allPosts.username}/> 
//              <p><strong>{props.allPosts.username}</strong></p>                
//             </div>

//             <img src={props.allPosts.imageUrl} alt={props.allPosts.username}/>

//             <div className='icons' onClick={props.likeIncrement}>
//             <FontAwesomeIcon icon={faHeart} className='heartIcon' />            
//             <FontAwesomeIcon icon={faComment} className='commentIcon' /> 
//              </div>
            
//             <p className='likes'><strong>{props.allPosts.likes} likes</strong></p>
//             <CommentSection allComments={props.allPosts.comments}/>
//         </div>
//     )
// }

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.allPosts.likes
        }
    }
    likeIncrement = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    }
    render() {
        return (
            <div className='wholePostContainer'>
            <div className='topHeader'>
            <img src={this.props.allPosts.thumbnailUrl} alt={this.props.allPosts.username}/> 
             <p><strong>{this.props.allPosts.username}</strong></p>                
            </div>

            <img src={this.props.allPosts.imageUrl} alt={this.props.allPosts.username}/>

            <div className='icons' onClick={this.likeIncrement}>
            <FontAwesomeIcon icon={faHeart} className='heartIcon' />            
            <FontAwesomeIcon icon={faComment} className='commentIcon' /> 
             </div>
            
            <p className='likes'><strong>{this.state.likes} likes</strong></p>
            <CommentSection allComments={this.props.allPosts.comments}/>
        </div>

        )
    }
}


PostContainer.propTypes = {
    allPosts: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        // allComments: PropTypes.array
    }
        
    ),
}




export default PostContainer;