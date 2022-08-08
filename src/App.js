import React from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './components/header/header';
import TaskList from './components/tasklist/tasklist';
import Input from './components/input/input';

const AppWrapper = styled.div`
background-color: #f5f5f5;
color: #444;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
margin: 0;
`;

const StyledTitle = styled.h1`
color: rgb(147, 196, 155);
font-size: 10rem;
text-align: center;
opacity: 0.4;
margin-top: 100px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { id: 0, title: 'Do laundry', done: false },
        { id: 1, title: 'Vacuum floor', done: false },
        { id: 2, title: 'Feed cat', done: false },
      ],
    };
  }

  addTask = (task) => {
    let { todoList } = this.state;
    const time = new Date();

    this.setState(() => {
      return {
        todoList: [
          ...todoList,
          {
            id: todoList.length !== 0 ? todoList.length : 0,
            title: task,
            done: false,
          },
        ],
      };
    });
    console.log(`You add ${task} at ${time.toLocaleString()}`);
  };

  doneTask = (id) => {
    let { todoList } = this.state;
    const toggleTask = todoList.map((task) => {
      return task.id === id ? { ...task, done: !task.done } : { ...task };
    });
    this.setState({
      todoList: toggleTask,
    });
  };
  
  onRemoveTask = (taskName) => {
    let { todoList } = this.state;
    const taskIndex = todoList.map((task) => task.title).indexOf(taskName);
    const newTodoList = [...todoList.slice(0, taskIndex), ...todoList.slice(taskIndex + 1)];

    this.setState({
      todoList: newTodoList,
    });
  };

  render() {
    const { todoList } = this.state;
    const activeTasks = todoList.filter((task) => !task.done);
    const doneTasks = todoList.filter((task) => task.done);

    return (
        <AppWrapper>
          <StyledTitle>todos</StyledTitle>
          <Header />
          
            <Input addTask={this.addTask} />
          
          
          <div className="main">
            {[...todoList].map((task) => {
              return (
                <TaskList
                  key={task.id}
                  task={task}
                  doneTask={() => this.doneTask(task.id)}
                  remove={this.onRemoveTask}
                />
              );
            })}
            <div className="todo-info">
              <span className="active-tasks">Your active tasks: {activeTasks.length}</span>
              <span className="done-tasks">Your finished tasks: {doneTasks.length}</span>
            </div>
          </div>

         
        </AppWrapper>
      
    );
  }
}

export default App;

