import React, { Component } from 'react';

import Bookings from './containers/Bookings.js';
import Footer from './components/Footer.js';
import Test from './components/Test.js';
import TestByName from './components/TestByName.js';
import './App.css';
import FakeBookings from './data/fakeBookings.json';

class App extends Component {
  state = {
    searchTerm: "",
    filteredData:  FakeBookings,
}
getFilteredData = (id) => {
  // console.log('filter', id, id !== '')
  const { filteredData } = this.state;

  if (id !== '') {
      const returnData = filteredData.filter(person => {
          return person.id === parseInt(id, 10);
      });
      return returnData;
  }
  else {
      // console.log(this.props.datas,"mmmmmmmm")
      return filteredData;
  }
}

setSearch = (ev) => {
  const searchTerm  = ev.target.value;
  this.setState({
      searchTerm
  })
}    
searchById = (e) => {
  const { searchTerm } = this.state
  console.log({
    searchTerm
  })
 
  // const id = e.target.value;
  // console.log(id);
  // const id = parseInt(e.target.value, 10);
  const filteredData = this.getFilteredData(searchTerm);
  // console.log(filteredData);
  this.setState({
      filteredData: filteredData
  })
}
  render() {
    const { filteredData } = this.state;
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Test 
          filteredData={filteredData}
          setSearch={this.setSearch}
          searchById={this.searchById}
           />
        {/* <TestByName datas={FakeBookings} /> */}
        {/* <Bookings />  */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
