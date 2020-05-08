import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = { counter: this.props.initialCounter };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return <div>
       <p> You have used <strong> <i> {this.state.counter} </i> </strong> seconds on this website</p>
   
    </div>;
  }
}

const TodoItems = (props) => {

  const { items, deleteItem, todoCompleted, editItem } = props;
  const length = items.length;
  const showItems = length ? (
    items.map((item) => {
      return (
        <div>
          <li
            key={item.id}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.description} | {item.deadline}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => todoCompleted(item.id)}
            />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => editItem(item.id)}>Edit</button>

          </li>
        </div>
      );
    })
  ) : (
      <p>NO items to show</p>
    );
  return <div>{showItems}</div>;
};

class AddItem extends React.Component {
  state = {
    description: "",
    deadline: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.description === "" || this.state.deadline === "") {
      console.log("false");
    } else {
      this.props.addItem(this.state);
      this.setState({
        description: "",
        deadline: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Todo description :
            <input  type="text"   placeholder="Enter description"   id="description"   onChange={this.handleChange}  value={this.state.description}  />
          </p>
          <p>
            deadline :
            <input type="date"  id="deadline"  onChange={this.handleChange}value={this.state.deadline}  />
          </p>
          <input className="submit" type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

function fetchTodo() {
  const KEY = '391eee7a119b50bd2c5960ab51622532'
  const URL = `https://gist.githubusercontent.com/benna100/${KEY}/raw`;
  return fetch(URL).then((response) => response.json());
}

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetchTodo().then((body) => {
      this.setState({
        todos: body,
      });
    });
  }

  deleteItem = (id) => {
    console.log(id);
    let items = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: items,
    });
  };

  todoCompleted = (id) => {
    console.log(id);
    let items = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      todos: items,
    });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.todos;
    items.push(item);
    this.setState({ items });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  editItem = (id) => {
    console.log(id);
    let items = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          description: (
            <input
              type="text"
              placeholder="update Todo"
              onChange={this.handleChange}
              id="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          ),
        };
      } else {
        return item;
      }
    });
    this.setState({
      todos: items,
    });
  };

  render() {
   
    return (
      <div>
         <h1>Todo List App</h1>
        <Counter initialCounter={0} />
        <AddItem addItem={this.addItem} />
        <TodoItems    items={this.state.todos}   deleteItem={this.deleteItem}  todoCompleted={this.todoCompleted} editItem={this.editItem}   />
      </div>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);