import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getComments, addComment, deleteComment } from '../api';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import styled from 'styled-components';

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-size: 15px;
  max-width: 800px;
  margin: auto;
  margin-bottom: 15px;
`;

const TopLeft = styled.div`
  h1 {
    margin: unset;
  }
  p {
    margin: unset;
    margin-top: 5px;
  }

  @media all and (max-width:480px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const TopRight = styled.div`
    @media all and (max-width:480px) {
    p {
      font-size: 12px;
    }
  }
`;

const ThumbnailWrap = styled.div`
  max-width: 800px;
  margin: auto;
`;

function ImagePage() {
  const { id } = useParams();
  const location = useLocation();
  const { image } = location.state;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [id]);

  const handleAddComment = (comment) => {
    addComment(id, comment)
      .then(response => setComments([...comments, response.data]))
      .catch(error => console.error('Error adding comment:', error));
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(id, commentId)
      .then(() => setComments(comments.filter(comment => comment.id !== commentId)))
      .catch(error => console.error('Error deleting comment:', error));
  };

  return (
    <div style={{padding: 15}}>
      <TopWrap>
        <TopLeft>
          <h1>{image.imageName}</h1>
          <p>{image.imageText}</p>
        </TopLeft>
        <TopRight>
          <p>댓글 {comments.length}개</p>
        </TopRight>
      </TopWrap>
      <ThumbnailWrap>
        <img src={image.imageURL} alt={image.imageName} width="100%" />
      </ThumbnailWrap>
      <CommentForm addComment={handleAddComment} />
      <CommentList comments={comments} deleteComment={handleDeleteComment} />
    </div>
  );
}

export default ImagePage;
