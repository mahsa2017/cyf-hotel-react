import React, { Component } from 'react';
import moment from 'moment';

class Results extends Component {
    render() {
        // const abcd = this.props.abc
        // console.log(abcd);
        return (
            <div>
                <table className="table search-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name </th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Room id </th>
                            <th>Check in date</th>
                            <th>Check out date</th>
                            <th>Number of staying days</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.abc.map((person, i) => <TableRow key={i}
                            data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
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
                <td>{moment(this.props.data.checkOuDate).diff(this.props.data.checkInDate, 'days')}</td> //false
            </tr>
        );
    }
}
export default Results;