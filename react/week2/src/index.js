import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TodoListItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const length = todo.length;
  const showItems = length ? (
    todo.map((todo) => {
      return (
        <div>
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <div>{todo.name}</div>
            <div>{todo.description}</div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleCompleted}
            />
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        </div>
      );
    })
  ) : (
    <p>NO items to show</p>
  );
  return <div>{showItems}</div>;
};

class TodoList extends React.Component {
  state = {
    todos: [
      {
        description: "Get out of bed",
        completed: true,
      },
      {
        description: "Brush teeth",
        completed: false,
      },
      {
        description: "Eat breakfast",
        completed: false,
      },
    ],
  };

  addTodoItem = (description) => {
    const newTodo = {
      description,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  deleteTodo = (id) => {
    let items = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: items,
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
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <TodoListItem
          todo={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Todo List </h1>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
