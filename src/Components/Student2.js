import React, {Component} from 'react';
import '../App.css';

class Student2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="students"> {this.props.student2 && this.props.student2.name} </div>
         );
    }
}
 
export default Student2;