import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 60px 0;
  button {
    background: #03A9F4;
    padding: 5px 10px;
    border: unset;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>멋쟁이 사자가 당신을 기다리고 있습니다.</h3>
      <img src="/lion.png" alt='어흥'/>
      <p>어흥..</p>
      <button onClick={() => navigate(-1)}>뒤돌아서 도망가기!</button>
    </Container>
  );
}

export default NotFound;
