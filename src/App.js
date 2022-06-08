import React from 'react';
import './App.css';

import Header from './components/header/header';
import TaskList from './components/tasklist/tasklist';
import Input from './components/input/input';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {id: 0, title: "Задание 1", done: false},
        {id: 1, title: "Задание 2", done: false},
        {id: 2, title: "Задание 3", done: false},
      ]
    }
  }

  addTask = task => {
    let { todoList } = this.state;
    const time = new Date();

    this.setState(state => {
      todoList.push({
        id: todoList.length !== 0 ? todoList.length : 0,
        title: task,
        done: false
      });
      return todoList;
    })

    console.log(`You add ${task} at ${time.toLocaleString()}`)
  }

  doneTask = id => {
    let { todoList } = this.state;

    const index = todoList.map(task => task.id).indexOf(id);
    this.setState(state => {
      todoList[index].done = true;
      return todoList;
    })
  }

  onRemoveTask = taskName => {
    let { todoList } = this.state;

    const taskIndex = todoList.map(task => task.title).indexOf(taskName);
    console.log(taskIndex);
    const newTodoList = [...todoList.slice(0, taskIndex), ...todoList.slice(taskIndex + 1)];

    this.setState({
      todoList: newTodoList
    });
  }

  render() {
    const { todoList } = this.state;
    const activeTasks = todoList.filter(task => !task.done);
    const doneTasks = todoList.filter(task => task.done);

    return (
        <div className='parent'>
          <div className='app-wrapper'>
            <Header />

            <div className='main'>
              {[...activeTasks, ...doneTasks].map(task => {
                return (
                    <TaskList
                        key={task.id}
                        task={task}
                        doneTask={() => this.doneTask(task.id)}
                        remove={this.onRemoveTask}
                    />
                )
              })}

              <div className='todo-info'>
                <span className='active-tasks'>Your active tasks: {activeTasks.length}</span>
                <span className='done-tasks'>Your finished tasks: {doneTasks.length}</span>
              </div>

            </div>


            <div className='input-wrapper'>
              <Input
                  addTask={this.addTask}
              />
            </div>

          </div>
        </div>

    )
  }

}

export default App;
