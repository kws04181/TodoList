import React from 'react';
import styled from "styled-components";

const TodoTemWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 5px;
  overflow: hidden;
  height: 1000px;
  background: #fdd3c4;
  text-align: center;
`;

const TodoTemTitle = styled.h1`
  font-size: 3rem;
`;


function TodoTem(props) {

  return (
    <TodoTemWrapper>
      <TodoTemTitle>📋 Todo List</TodoTemTitle>
    </TodoTemWrapper>
  );
}

export default TodoTem;