import React, { Component } from 'react';

import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'


const PostContainer = props => {
    // console.log(props);
    return (
        <div className='wholePostContainer'>
            <div className='topHeader'>
            <img src={props.allPosts.thumbnailUrl} /> 
                <p><strong>{props.allPosts.username}</strong></p>
                
            </div>
            <img src={props.allPosts.imageUrl} alt={props.allPosts.username}/>
            <CommentSection allComments={props.allPosts.comments}/>
        </div>
    )
}

export default PostContainer;