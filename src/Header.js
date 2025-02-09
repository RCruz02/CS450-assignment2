import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div class="row1">
            <div>
                <h3>Name: {this.props.personInfo.name}</h3>
                <p>Major: {this.props.personInfo.occupation}</p>
            </div>
            <div>
                <p>Email: <a href="mailto:abc@gmail.com"> {this.props.contactInfo.email}</a></p>
                <p>Web: {this.props.contactInfo.web}</p>
                <p>Mobile: {this.props.contactInfo.mobile}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Header;