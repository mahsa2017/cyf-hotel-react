import React, { Component } from 'react';

const filterCallBack = (person, id) => {
    return person.id === id;
}

// class AnotherClass {
//     Test.searchById()  // inside the call, `this` would refer to AnotherClass, and NOT Test
//     Test.searchById // test,getFilteredData. anotherClass.getFitleredData
// }

class Test extends Component {
    constructor(props) {
        super(props)
        this.searchById = this.searchById.bind(this);
        this.state = {
            filteredData: this.props.datas
        }
    }
   
    getFilteredData(id) {
        const filterData = this.props.datas.filter(person => {
            return person.id === id;
        });
        return filterData;
    }

    searchById(e) {
        const id = parseInt(e.target.value, 10);
        const filterData = this.getFilteredData(id);
        console.log(filterData);
        this.setState({
            filteredData: filterData
        })
    }
    render() {
        console.log(this.state);
        const filterData = this.state.filteredData;
        return (
            <div>
                {this.props.datas.map((person, i) => <li key={i} >{person.firstName} {person.surname}</li>)}
                <input type="text" id="customerId" className="form-control" placeholder="Customer Id" onChange={this.searchById} />
                <button className="btn btn-primary fn-submit-name" onClick={this.props.propname}></button>
                {filterData.map((person, i) => <li>{person.firstName} {person.surname}</li>)}

            </div>
        )
    }

}
export default Test;