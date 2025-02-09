import React, { Component } from 'react';

class PersonalProfile extends Component {
    render() {
      return (
        <div id="row2">
            <h3>{this.props.profile.title}</h3>
            <div>
                <p>{this.props.profile.content}</p>
            </div>
        </div>
      );
    }
  }
  
  export default PersonalProfile;