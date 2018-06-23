import React, { Component } from 'react';
import moment from 'moment';

class Results extends Component {
    render() {
        const styles = {     
                border: 1,
                textAlign: 'center',
                padding: 10,
        }
        // const abcd = this.props.abc
        // console.log(abcd);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={styles}>Title</th>
                            <th style={styles}>First Name </th>
                            <th style={styles}>Surname</th>
                            <th style={styles}>Email</th>
                            <th style={styles}>Room id </th>
                            <th style={styles}>Check in date</th>
                            <th style={styles}>Check out date</th>
                            <th style={styles}>Number of staying days</th>

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
        const styles = {
            border: 1,
            textAlign: 'center',
            padding: 10
    }
    
        return (
            <tr style={styles}>
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