import React, { Component } from 'react';

class PersonalProfile extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.title}</h3>
            <div>
                <p>{this.props.content}</p>
            </div>
        </div>
      );
    }
  }
  
  export default PersonalProfile;