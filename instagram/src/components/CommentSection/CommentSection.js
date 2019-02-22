import React, { Component }from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

import NewComment from './NewComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allComments: props.allComments,             
            newComment: ' '
        };
    }
    
    handleChanges = (e) => {
        this.setState({ newComment: e.target.value })
    };
    
    handleAddNewComment = (e) => {
        e.preventDefault();
        this.setState({ 
            allComments: [...this.state.allComments, { username: 'Sem', text: this.state.newComment}], 
            newComment: ' '
        });
   
    }
    render() {
        return (
            <div className='allCommentDiv'>
                {this.state.allComments.map((eachComment, index) => (
                    <Comment key={index} commentData={eachComment} />
                ))}

                <NewComment 
                aNewComment={this.state.newComment}
                submitNewComment={this.handleAddNewComment}
                showInputText={this.handleChanges} />             
            </div>            
        )
    }
}


CommentSection.propTypes = {
    allcomments: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default CommentSection