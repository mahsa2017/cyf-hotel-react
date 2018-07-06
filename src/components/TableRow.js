import React, { Component } from 'react';
import moment from 'moment';

class TableRow extends Component {
    render() {
        return (
            <tr>
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