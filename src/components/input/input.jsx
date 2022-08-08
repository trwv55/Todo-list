import React, { useState } from 'react';
import styled from 'styled-components';

const TaskInput = styled.input`
  border: none;
  color: #444;
  font-size: 2rem;
  padding: 1rem 2rem;
  display: block;
  width: 100%;
  &::placeholder {
    color: #d5d5d5;
  }
  &:focus {
    outline-color: rgb(147, 196, 155);
  }
`;

const Input = (props) => {
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    if (e.key === 'Enter' && inputValue) {
      props.addTask(inputValue);
      setInputValue('');
    }
  };
  return (
    <div className='input-wrapper'>
      <TaskInput
        type='text'
        placeholder='Add a task'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={addTask}
      />
    </div>
  );
};

export default Input;
