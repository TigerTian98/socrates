import React, { Component } from 'react';
import './App.css';
import Student from './Components/Student.js'
import Student2 from './Components/Student2.js'


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        students: [
          {name: 'A'},
          {name: 'B'},
          {name: 'C'},
          {name: 'D'},
          {name: 'E'},
          {name: 'F'},
          {name: 'G'},
          {name: 'H'},
          {name: 'I'},
          {name: 'J'}
        ],

        students2: [
          {name: 'A'},
          {name: 'B'},
          {name: 'C'},
          {name: 'D'},
          {name: 'E'},
          {name: 'F'},
          {name: 'G'},
          {name: 'H'},
          {name: 'I'},
          {name: 'J'}
        ],

        //our pickFromAll boolean
        pickedStudent: null,
        pickedStudent2: null
      }
    }
  
    //handle picking a random student
    pickRandomStudent = () => {
      //call this.setState to update our state
      this.setState(() => ({
        pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
      }))
    }

    pickRandomStudent2 = () => {
      //call this.setState to update our state
      this.setState(() => ({
        pickedStudent2: this.state.students2[Math.floor(Math.random() * this.state.students2.length)]
      }));
      this.state.students2.splice (this.state.students2.indexOf(this.state.pickedStudent2), 1);
      if (this.state.students2.length == 0) {
        alert (`Running out of students to pick.
Please refresh your browser.`);
      }
    }

    render() {
    return (
      <div className="App">
      <div class="Button" id="rep" onClick={this.pickRandomStudent}>
        <br/><br/><br/><br/>
        Pick a student with repetition
        <br/><br/><br/><br/>
        <Student student={this.state.pickedStudent}/>
      </div>
      <div class="Button" id="noRep" onClick={this.pickRandomStudent2}>
        <br/><br/><br/><br/>
        Pick a student without repetition
        <br/><br/><br/><br/>
        <Student2 student2={this.state.pickedStudent2}/>
      </div>
      </div>
    );
  }
}

export default App;