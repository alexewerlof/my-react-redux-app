import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import logo from './logo.svg';
import * as actionCreators from './redux/actionCreators';
import './App.css';

class App extends Component {

  render() {
    var startTime = this.props.startTime;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React! { startTime} </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.running ? 'running' : 'stopped'}</p>
        <button onClick={this.props.start}>Start</button>
        <button onClick={this.props.stop}>Stop</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    running: state.running,
    startTime: state.startTime,
    elapsedTime: state.elapsedTime
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
