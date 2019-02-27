import React, { Component } from 'react';

import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import styled, { css } from 'styled-components';
import { UsernameP } from '../Styles/Reusables';

export const StyledImg = styled.img`
  padding: 20px;
  margin: 0 auto;    
`;

export const StyledWolePostDiv = styled.div`
  border: 1px solid #DC143C;
`

export const StyledIconDiv = styled.div`
    background: #DC143C;
    ${props => 
    props.className === 'icons' && 
    css`
    background: #FFC0CB;
    margin-left: 50px;    
    border-radius: 20px;
    `}
`;

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
            <StyledWolePostDiv className='wholePostContainer'>
            <div className='topHeader'>
            <StyledImg src={this.props.allPosts.thumbnailUrl} alt={this.props.allPosts.username}/> 
             <UsernameP><strong>{this.props.allPosts.username}</strong></UsernameP>                
            </div>

            <StyledImg src={this.props.allPosts.imageUrl} alt={this.props.allPosts.username}/>

            <StyledIconDiv className='icons' onClick={this.likeIncrement}>
            <FontAwesomeIcon icon={faHeart} className='heartIcon' />            
            <FontAwesomeIcon icon={faComment} className='commentIcon' /> 
             </StyledIconDiv>
            
            <UsernameP className='likes'><strong>{this.state.likes} likes</strong></UsernameP>
            <CommentSection allComments={this.props.allPosts.comments}/>
        </StyledWolePostDiv>

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