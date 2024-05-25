import React from 'react';
import styled from 'styled-components';

const CommentSection = styled.div`
  padding: 15px;
  margin-top: 5px;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
`;

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  button {
    width: 60px;
    border: unset;
    background: unset;
    color: grey;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Author = styled.div`
  width: 60px;
  font-weight: 600;
`

const CommentP = styled.div`
  width: 100%;
`

function CommentList({ comments, deleteComment }) {
  return (
    <CommentSection>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Author>익명</Author>
          <CommentP>{comment.commentBody}</CommentP>
          <button onClick={() => deleteComment(comment.id)}>삭제</button>
        </Comment>
      ))}
    </CommentSection>
  );
}

export default CommentList;
