import React, { Component } from 'react';

import './App.css';
import EventCalendar from './containers/eventCalendar';

class App extends Component{
  render() {
    return (
      <div className="App">
       
        <EventCalendar />
        <footer>
          <hr/>
          <h5>By: Jay Prakash | 11/12/2021 </h5>
          </footer>
      </div>
    );
  }
}

export default App;
