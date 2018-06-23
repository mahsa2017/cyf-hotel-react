import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';
import Test from '../components/Test.js';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  constructor(props){
    super(props)
    this.state = {
      data: FakeBookings
    }
  }
  showData(searchedId){
    if(searchedId !== ''){
      for(var i=0;i<this.state.data.length;i++){
        if(this.state.data[i].id === searchedId){
          return this.state.data[i];
        }
      }
    }
      else {
        return this.state.data;
      }
    }
  // findResult(FakeBookings) {
  //  for(var i=0;i<FakeBookings.length;i++){
  //    if(a === FakeBookings[i].id)
  //    return a;
  //  }   
  // }
  render() {
    let abcd = FakeBookings;
    console.log(abcd);
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results abc={this.state.data} />
          <Test propname={this.showData} /> 
        </div>
      </div>
    );
  }
}
