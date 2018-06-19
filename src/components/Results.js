import React, { Component } from 'react';

class Results extends Component {
    render() {
        const abcd = this.props.abc
        console.log(abcd);
        return (
            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Room id</th>
                        <th>Check in date</th>
                        <th>Check out date</th>

                    </tr>
                    <tr>
                        <td>Mr</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>jill@yahoo.com</td>
                        <td>10</td>
                        <td>2018/01/01</td>
                        <td>2018/02/02</td>
                    </tr>
                    <tr>
                        <td>Mr</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>jill@yahoo.com</td>
                        <td>10</td>
                        <td>2018/01/01</td>
                        <td>2018/02/02</td>
                    </tr>
                    <tr>
                        <td>Mr</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>jill@yahoo.com</td>
                        <td>10</td>
                        <td>2018/01/01</td>
                        <td>2018/02/02</td>
                    </tr>
                    <tr>
                        <td>Mr</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>jill@yahoo.com</td>
                        <td>10</td>
                        <td>2018/01/01</td>
                        <td>2018/02/02</td>
                    </tr>
                    <tr>
                        <td>Mr</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>jill@yahoo.com</td>
                        <td>10</td>
                        <td>2018/01/01</td>
                        <td>2018/02/02</td>
                    </tr>
                </table>
            </div>

        )
    }

}

export default Results;