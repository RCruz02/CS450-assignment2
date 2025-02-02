import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.title}</h3>
            <div>
                <h3>{this.props.job1}</h3>
                <p>{this.props.content1}</p>
                <h3>{this.props.job2}</h3>
                <p>{this.props.content2}</p>
            </div>
        </div>
      );
    }
  }
  
  export default WorkExperience;