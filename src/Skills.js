import React, { Component } from 'react';

class Skills extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.title}</h3>
            <div id="space">
                <p>{this.props.skill1}</p>
                <p>{this.props.skill2}</p>
                <p>{this.props.skill3}</p>
            </div>
            <div id="space">
                <p>{this.props.skill4}</p>
                <p>{this.props.skill5}</p>
                <p>{this.props.skill6}</p>
            </div>
            <div id="space">
                <p>{this.props.skill7}</p>
                <p>{this.props.skill8}</p>
                <p>{this.props.skill9}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Skills;