import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </p>
      </div>
    );
  }
}

export default App;
