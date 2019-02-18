import React, { Component } from 'react';
import Comment from './Comment';

const CommentSection = props => {
    // console.log(props);
    return (
        <div>
            {props.allComments.map((eachComment, index) => (
                <Comment key={index} commentData={eachComment} />

                

            ))}

        </div>
    )
}

export default CommentSection