import React, { Component } from 'react';
import Results from '../components/Results.js';

// const filterCallBack = (person, id) => {
//     return person.id === id;
// }
// class AnotherClass {
//     Test.searchById()  // inside the call, `this` would refer to AnotherClass, and NOT Test
//     Test.searchById // test,getFilteredData. anotherClass.getFitleredData
// }
export default (props) => {
        // console.log(this.state);
        const { filteredData } = props;
       
        return (
            <div>
              
                <input 
                type="text" id="customerId" 
                className="form-control"
                 placeholder="Customer Id"
                  onChange={props.setSearch} />
                <button className="btn btn-primary fn-submit-name" onClick={props.searchById}>search</button>
                <Results abc={filteredData ? filteredData : []} />
            </div>
        )
}
