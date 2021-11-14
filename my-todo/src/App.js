import React from "react";
import './App.css';
import MyComponents from './components/MyComponents';
import Todo from "./components/TaskTodo";
import InProgress from "./components/TaskProgress";
import Done from "./components/TaskDone";

function App() {
  return (
      <div className="App">
          <MyComponents>
              <Todo/>
              <InProgress/>
              <Done/>
          </MyComponents>
      </div>
  );
}

export default App;
