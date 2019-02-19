import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';


const PostContainer = props => {
    // console.log(props);
    return (
        <div className='wholePostContainer'>
            <div className='topHeader'>
            <img src={props.allPosts.thumbnailUrl} alt={props.allPosts.username}/> 
             <p><strong>{props.allPosts.username}</strong></p>                
            </div>

            <img src={props.allPosts.imageUrl} alt={props.allPosts.username}/>
            <p className='likes'><strong>{props.allPosts.likes} likes</strong></p>
            <CommentSection allComments={props.allPosts.comments}/>
        </div>
    )
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

// PostContainer.propTypes = {
//     allPosts: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string

//         })
//     )
// }



export default PostContainer;