import React, {Component} from 'react';
import '../App.css';

class Student extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="students"> {this.props.student && this.props.student.name} </div>
         );
    }
}
 
export default Student;