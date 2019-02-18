import React, { Component } from 'react';

const Comment = props => {
    console.log(props);
    return (
        <div>
            <p>
                <strong>{props.commentData.username}</strong> {props.commentData.text}
            </p>
        </div>
    )
}

export default Comment;