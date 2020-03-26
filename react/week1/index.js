import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Compo extends React.Component {
  render() {
    return ( 
        <div>
          <Header />
          <Todos elements={todoArray} />
          <Footer />
      </div>
    );
  }
}

const todoArray = [
  {
    description: " Get out of bed", date: " Wed Sep 13 2017"
  },
  {
    description: "Brush teeth", date: " Thu Sep 14 2017"
  },
  {
    description: "Eat breakfast", date: "Fri Sep 15 2017 "
  }
];

function Header() {
  return <h1>My todo list for this month</h1>;
}

function Todos(props) {
  const elements = props.elements;
  const myTodo = elements.map(action => {
    return (
      <li>
        {action.description} , {action.date}
      </li>
    );
  });
  return <ul>{myTodo}</ul>;
}

class Footer extends React.Component {
  render() {
    return <h3>Well Done!!</h3>;
  }
}

ReactDOM.render(<Compo />,document.getElementById("root"));