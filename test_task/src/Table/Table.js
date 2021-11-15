import React, {useState} from 'react';
import TableRow from './TableRow';

const Table = ({ data, columns }) => {
    return (
        <table>
            <tr>
                {columns.map((column) => (<th key={column.key}>{column.title}</th>))}
            </tr>
            {data.map((item) => (
                <TableRow
                    key={item.id} 
                    item={item} 
                    columns={columns} 
                />
            ))}
        </table>
    );
}

export default Table;