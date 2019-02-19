import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => {
    // console.log(props);
    return (
        <div className='allCommentDiv'>
            {props.allComments.map((eachComment, index) => (
                <Comment key={index} commentData={eachComment} />              

            ))}

        </div>
    )
}

CommentSection.propTypes = {
    allcomments: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default CommentSection