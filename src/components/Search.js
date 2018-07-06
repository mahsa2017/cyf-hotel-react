import React from 'react';
import Button from './Button'

const Search = props => {
  return(
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row search-wrapper">
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Id</label>
          <div className="search-row">
            <input type="text" id="customerId" className="form-control" placeholder="Customer Id" value={props.searchId} onChange={props.setSearchId} />
            < Button name="search by id" clickState={props.searchById}/>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Name</label>
          <div className="search-row">
            <input type="text" id="customerId" className="form-control" placeholder="Customer Name" value={props.searchName} onChange={props.setSearchName} />
            < Button name="search by name" clickState={props.searchByName}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default Search;
