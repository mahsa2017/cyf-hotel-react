import React, { Component } from 'react';
import moment from 'moment';

class TableRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ''
        }
    }
    selectRow = (e) => {
        if(this.state.color ==='')
        this.setState({
            color: 'lightblue'
        })
        else{
            this.setState({color:''});
        }
    }
    
    render() {
        return (
            <tr onClick={this.selectRow}  style={{ background: this.state.color }}>
                <td >{this.props.info.title} </td>
                <td>{this.props.info.firstName}</td>
                <td>{this.props.info.surname}</td>
                <td>{this.props.info.email}</td>
                <td>{this.props.info.roomId}</td>
                <td>{this.props.info.checkInDate}</td>
                <td>{this.props.info.checkOutDate}</td>
                <td>{moment(this.props.info.checkOutDate).diff(this.props.info.checkInDate, 'days')} days</td>
            </tr>
        );
    }
}

export default TableRow;