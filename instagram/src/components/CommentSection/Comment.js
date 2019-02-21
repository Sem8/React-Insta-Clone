import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    console.log(props);
    return (
        <div className='eachCommentDiv'>
            <p>
                <strong>{props.commentData.username}</strong> {props.commentData.text}
            </p>
        </div>
    )
}



Comment.propTypes = {
    commentData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })

}

export default Comment;