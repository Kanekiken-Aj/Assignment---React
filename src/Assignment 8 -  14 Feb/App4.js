// App.js
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App4 = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Todo App:- Using Redux</h3>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App4;
