import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/layout.jsx';
import { run as runHolder } from 'holderjs/holder';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="d-flex">
          <Layout />

      </div>
    );
  }
}

export default App;