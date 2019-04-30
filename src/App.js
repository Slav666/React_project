import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render () {
    return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>My name is Slawek</p>
      <Person name  = "John" age = "29" />
      <Person name = "Alex" age= "37">My hobies: coding</Person>
      <Person name = "Chris" age ="35"/>
    </div>
    );
  }
}

export default App;
