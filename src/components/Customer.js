import React, { Component } from 'react';
import { TableCell, TableRow } from '@material-ui/core';

class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell><p>{this.props.id}</p></TableCell>
                <TableCell><img src={this.props.image} alt='profile'/></TableCell>
                <TableCell><h2>{this.props.name}</h2></TableCell>
                <TableCell><p>{this.props.birthday}</p></TableCell>
                <TableCell><p>{this.props.gender}</p></TableCell>
                <TableCell><p>{this.props.job}</p></TableCell>
            </TableRow>
        );
    }
}

export default Customer;