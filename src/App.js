import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>  {
    const [personsState, setPersonsState] = useState ( {
      persons: [
              {name: "John", age: 29},
              {name: "Alex" ,age:37},
              {name: "Chris", age: 35}
              ]
               
    });

    const [otherState, setOtherState] = useState('some other value');
    console.log(personsState, otherState);
  
    const swichNameHandler = () => {
          
          setPersonsState({
            persons: [
            {name: "Peter", age: 29},
            {name: "Alex" ,age:37},
            {name: "Chris", age: 40},
            
          ]
        });
        };

    return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>My name is Slawek</p>
      <button onClick={swichNameHandler}>Swich Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My hobies: coding</Person>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      
    </div>
    );
  
};

// stary sposob kodowania
// class App extends Component {
//   state = {
//     persons: [
//       {name: "John", age: 29},
//       {name: "Alex" ,age:37},
//       {name: "Chris", age: 35},
      
      
//     ]
//   }
//   swichNameHandler = () => {
//     // 
//     this.setState({persons: [
//       {name: "Peter", age: 29},
//       {name: "Alex" ,age:37},
//       {name: "Chris", age: 40},
      
//     ]
//   })
//   }
//   render () {
//     return (
//     <div className="App">
//       <h1>Hi, I am a react app</h1>
//       <p>My name is Slawek</p>
//       <button onClick={this.swichNameHandler}>Swich Name</button>
//       <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
//       <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobies: coding</Person>
//       <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      
//     </div>
//     );
//   }
// }

export default App;
