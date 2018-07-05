import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

class Results extends Component {
    render() {
        return (
            <div>
                <table className="table search-table">
                    <thead>
                       <TableHead />
                    </thead>
                    <tbody>
                        {this.props.datas.map((person, i) => <TableRow key={i}
                            data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;