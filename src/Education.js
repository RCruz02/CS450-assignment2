import React, { Component } from 'react';

class Education extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.title}</h3>
            <div>
                <h3>{this.props.school1}</h3>
                <p>{this.props.major1}</p>
                <p>{this.props.date1}</p>
                <p>{this.props.gpa1}</p>
                <h3>{this.props.school2}</h3>
                <p>{this.props.major2}</p>
                <p>{this.props.date2}</p>
                <p>{this.props.gpa2}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Education;