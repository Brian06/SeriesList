import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  test = () => {
    axios.get('/test')
    .then(response => {
      let data = response.data;
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.test}>Click Me!</button>
      </div>
    );
  }
}

export default App;
