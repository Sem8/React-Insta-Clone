import React from 'react';
// import PropTypes from 'prop-types';

const NewComment = props => {
    return (
        
            <form onSubmit={props.submitNewComment}>
                <input 
                placeholder='Add a comment'
                type='text'
                value={props.aNewComment}                
                onChange={props.showInputText}
                >
                </input>
        </form>

       
        
    )
}

export default NewComment;