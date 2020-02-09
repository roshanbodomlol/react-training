import React, { Component } from 'react';

import TodoItem from './TodoItem';
import './Todo.scss';

class Todo extends Component {
  state = {
    todos: [],
    completedTodos: [],
    inputValue: ''
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const completedTodos = JSON.parse(localStorage.getItem('completed'));

    this.setState({
      todos,
      completedTodos
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todos, inputValue } = this.state;
    const newList = [...todos];
    newList.push(inputValue);

    this.setState({
      todos: newList,
      inputValue: ''
    }, () => {
      localStorage.setItem('todos', JSON.stringify(newList));
    });
  };

  updateItem = (index) => {
    const { completedTodos } =  this.state;
    const newList = [...completedTodos];

    if (newList.indexOf(index) < 0) {
      newList.push(index);
    } else {
      const indexToRemove = newList.indexOf(index);
      newList.splice(indexToRemove, 1);
    }

    this.setState({
      completedTodos: newList
    }, () => {
      localStorage.setItem('completed', JSON.stringify(newList));
    });
  }

  render() {
    const { inputValue, todos, completedTodos } = this.state;

    const todoList = todos.map((todo, index) => (
      <TodoItem
        key={`todo-item-${index}`}
        text={todo}
        onUpdate={() => { this.updateItem(index) }}
        isComplete={completedTodos.indexOf(index) > -1}
      />
    ));

    return (
      <div className="todo">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={e => this.setState({ inputValue: e.target.value })}
              />
              <button>Add</button>
            </form>
          </div>
          <div className="col">
            <div className="todolist">
              {todoList}
            </div>
          </div>
        </div>   
        <div className="row">
          <div className="col">
            <p>
              {`Total items in list: ${todos.length}`}
            </p>
            <p>
              {`Completed: ${completedTodos.length}`}
            </p>
          </div>
        </div> 
      </div>
    );
  }
}

export default Todo;
