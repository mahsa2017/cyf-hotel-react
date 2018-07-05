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
      searchId: "",
    filteredData:  FakeBookings
    }
  }
  setSearch = (ev) => {
    const searchId  = ev.target.value;
    console.log(searchId)
    this.setState({
        searchId
    })
  } 
  searchById = (e) => {
    console.log("hiiiiiii")
    const { searchId } = this.state
    console.log({searchId})
    const filteredData = this.getFilteredDataById(searchId);
    // console.log(filteredData);
    this.setState({
        filteredData: filteredData
    })
  }
  getFilteredDataById = (id) => {
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
  render() {
    const { filteredData } = this.state;
    let abcd = FakeBookings;
    console.log(abcd);
    return (
      <div className="App-content">
        <div className="container">
          <Search setSearch={this.setSearch} searchId={this.state.searchId} searchById={this.searchById} />
          <Results data={this.state.filteredData} />
        </div>
      </div>
    );
  }
}
