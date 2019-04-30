import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "John", age: 29},
      {name: "Alex" ,age:37},
      {name: "Chris", age: 35}
      
    ]
  }
  swichNameHandler = () => {
    console.log('Was Cliced');
  }
  render () {
    return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>My name is Slawek</p>
      <button onClick={this.swichNameHandler}>Swich Name</button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobies: coding</Person>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
