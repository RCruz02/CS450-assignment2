import React, { Component } from 'react';

class Education extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.education.title}</h3>
            <div>
                <h3>{this.props.education.bsInstitution}</h3>
                <p>{this.props.education.bsDegree}</p>
                <p>{this.props.education.bsDates}</p>
                <p>{this.props.education.bsGpa}</p>
                <h3>{this.props.education.msInstitution}</h3>
                <p>{this.props.education.msDegree}</p>
                <p>{this.props.education.msDates}</p>
                <p>{this.props.education.msGpa}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Education;