import React, { Component } from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';
import Counter from './Counter';

class Results extends Component {
   
    render() {
        //console.log(this.props.datas[1])
        return (
            <div>
                <Counter messageCounter="Result" resultLen={this.props.datas.length} />
                <table className="table search-table">
                    <thead>
                        <TableHead />
                    </thead>
                    <tbody>
                        {this.props.datas.map((person, key) => <TableRow 
                         key={key} info={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;