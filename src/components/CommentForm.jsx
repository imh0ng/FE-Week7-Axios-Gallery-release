import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  padding: 15px;
  border-bottom: #ccc 1px solid;
  input {
    width: 100%;
    border: unset;
    font-size: 15px;
  }
  button {
    width: 60px;
    border: unset;
    background: unset;
    color: #2196F3;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
`;

function CommentForm({ addComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <Form>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="댓글 작성..."
      />
      <button onClick={handleAddComment}>게시</button>
    </Form>
  );
}

export default CommentForm;
