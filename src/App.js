import React, { Component } from 'react';
//import Counter from './components/Counter/Counter';
import TodoApp from './components/Todo/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp></TodoApp>
      </div>      
    );
  }
}


export default App;