import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  constructor(props){
    super(props)
    this.state = {
      
    }

  }
  render() {
    let abcd = FakeBookings;
    console.log(abcd);
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results abc={FakeBookings} />

        </div>
      </div>
    );
  }
}
