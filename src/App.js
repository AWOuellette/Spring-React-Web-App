import React, { Component } from 'react';
import FirstComponent from './components/LearningComponents/FirstComponent'
import SecondComponent from './components/LearningComponents/SecondComponent'
import ThirdComponent from './components/LearningComponents/ThirdComponent'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo/TodoApp.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
      </div>
    );
  }
}

function FourthComponent(){
  return (
    <div className="fourthComponent">
      FourthComponent
    </div>
  );
}

export default App;