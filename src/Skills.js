import React, { Component } from 'react';

class Skills extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.keySkills.title}</h3>
            <div id="space">
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
            </div>
            <div id="space">
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
            </div>
            <div id="space">
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
                <p>{this.props.keySkills.content1}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Skills;