import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App" style={{width:"300px",height:"300px",backgroundColor:"red"}}>
       123
          {
              this.props.children
          }
      </div>
    );
  }
}
