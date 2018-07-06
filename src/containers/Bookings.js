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
      searchId: "",
      searchName:"",
    filteredData:  FakeBookings,
    }
  }
  setSearchId = (ev) => {
    const searchId  = ev.target.value;
    console.log(searchId)
    this.setState({
        searchId
    })
  } 
  setSearchName = (ev) => {
    const searchName = ev.target.value;
    console.log(searchName)
    this.setState({
        searchName
    })
  } 
  searchById = (e) => {
    console.log("hiiiiiii Id")
    const { searchId } = this.state
    console.log({searchId})
    const filteredData = this.getFilteredDataById(searchId);
    // console.log(filteredData);
    this.setState({
        filteredData: filteredData
    })
  }
  searchByName = (e) => {
    console.log("hiiiiiii Name")
    const { searchName } = this.state
    console.log({searchName})
    const filteredData = this.getFilteredDataByName(searchName);
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
  getFilteredDataByName = (name) => {
    // console.log('filter', id, id !== '')
    const { filteredData } = this.state;
    if (name !== '') {
        const returnData = filteredData.filter(person => {
            return (person.firstName + " " + person.surname)  === this.state.searchName;
        });
        return returnData;
    }
    else {
        // console.log(this.props.datas,"mmmmmmmm")
        return filteredData;
    }
  }
  render() {
    //const { filteredData } = this.state;
    let abcd = FakeBookings;
    console.log(abcd);
    return (
      <div className="App-content">
        <div className="container">
          <Search setSearchId={this.setSearchId} searchId={this.state.searchId} searchById={this.searchById} 
          setSearchName={this.setSearchName}
          searchName={this.state.searchName} searchByName={this.searchByName}
          />
          <Results datas={this.state.filteredData} />
        </div>
      </div>
    );
  }
}
