import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {Provider } from 'react-redux'
import store from './store/store'

const App5 = () => {
  return (
    <Provider store={store}>
        <h3>Todo App:- using Redux Toolkit</h3>
        <TodoForm/>
        <TodoList/>
    </Provider>
  )
}

export default App5

