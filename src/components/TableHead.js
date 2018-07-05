import React, {Component} from 'react';

class TableHead extends Component {
    render() {
        return (
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
        );
    }
}

export default TableHead;