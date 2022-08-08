import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';

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

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  addTask = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      this.props.addTask(inputValue);
      this.setState({ inputValue: '' });
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="input-wrapper">
        <TaskInput
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={this.onChangeInput}
        />
        <Button customClass="button-input" name="" onClick={this.addTask} />
      </div>
    );
  }
}

export default Input;
