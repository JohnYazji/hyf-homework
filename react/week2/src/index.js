import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const TodoListItem = ({ todo, toggleComleted, deleteTodo}) => (
<li style={{textDecoration: todo.completed ? "line-through" : "none" }}> 
  <div>{todo.name}</div>
  <div>{todo.description}</div>
  <input 
  type="checkbox"
  checked={todo.completed}
  onChange={toggleCompleted}
  />
  <button onClick={deleteTodo}>delete</button>
</li>
);

class AddTodoForm extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) =>
  this.setState({
    value: event.target.value,
  });
  render() {
    const { addTodoItem } = this.props;

    return (
      <form
      onSubmit={(event) => {
        event.preventDefault();
        this.setState({
          value: "",
        });
      }}
>
  <input
  type="text"
  value={this.state.value}
  onChange={this.handleChange}
  />
  <button type="submit">Add Todo</button>
        </form> 
      );
    }
 }


class TodoList extends React.Component {
  state ={ 
    todos: [
    {
      "description": "Get out of bed",
      completed: true,
    },
    {
      "description": "Brush teeth",
      completed: false,
    },
    {
      "description": "Eat breakfast",
      completed: false,
    },
  ],
};

addTodoItem=(description) => {
  const newTodo = {
    description,
    completed: false,
  };
  this.setState({
    todos: [... this.state.todos, newTodo],
  });
};

toggleCompleted = (currentIndex) => {
  this.setState({ 
   todos: this.state.todos.map((todo, index) => {
    if (currentIndex === index) {
      return { 
        ...todo, 
        completed: !todo.completed,
      };
  } else {
    return todo;
  };
}), 
  }),

ReactDOM.render(
  <React.StrictMode>
    <h1> My todo list</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();