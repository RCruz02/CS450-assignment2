import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <div class="row1">
            <div>
                <h3>Name: {this.props.name}</h3>
                <p>Major: {this.props.major}</p>
            </div>
            <div>
                <p>Email: <a href="mailto:abc@gmail.com"> {this.props.email}</a></p>
                <p>Web: {this.props.web}</p>
                <p>Mobile: {this.props.mobile}</p>
            </div>
        </div>
      );
    }
  }
  
  export default Header;