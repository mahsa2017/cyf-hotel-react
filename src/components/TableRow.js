import React, { Component } from 'react';
import moment from 'moment';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td >{this.props.data.title} </td>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.surname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.roomId}</td>
                <td>{this.props.data.checkInDate}</td>
                <td>{this.props.data.checkOutDate}</td>
                <td>{moment(this.props.data.checkOutDate).diff(this.props.data.checkInDate, 'days')} days</td>
            </tr>
        );
    }
}

export default TableRow;