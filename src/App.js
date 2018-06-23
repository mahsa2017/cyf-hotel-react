import React, { Component } from 'react';

import Bookings from './containers/Bookings.js';
import Footer from './components/Footer.js';
import Test from './components/Test.js';
import './App.css';
import FakeBookings from './data/fakeBookings.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Test datas={FakeBookings}  />
        {/* <Bookings />  */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
