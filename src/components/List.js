import React from 'react';
import Table from 'react-bootstrap/Table'

export function List(props) {
    return (
        <div className="list">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Message</th>
                    </tr>
                </thead>
                {props.data.map((col, ind) => (<tr>
                    <td>{ind + 1}</td>
                    <td>{col}</td>
                </tr>))}
            </Table>
        </div>
    )
}