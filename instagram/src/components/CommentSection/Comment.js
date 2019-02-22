import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { UsernameP } from '../Styles/Reusables';

const Comment = props => {
    console.log(props);
    return (
        <div className='eachCommentDiv'>
            <UsernameP>
                <strong>{props.commentData.username}</strong> {props.commentData.text}
            </UsernameP>
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