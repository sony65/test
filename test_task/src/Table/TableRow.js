import React, {useState, useEffect, isValidElement} from 'react';

const TableRow = ({item, columns}) => {

    const [editItem, setEditItem] = useState(item);
    
    useEffect(() => {
        setEditItem(item);
    }, [item]) 

    return (
        <tr>
            {columns.map((column) => {
                const fieldData = column.fieldRefiner(item);
                return (
                    <td key={column.key}>
                        {isValidElement(fieldData) ? fieldData : [fieldData.title, fieldData.subtitle].join(', ')}
                    </td>
                );
            })}
        </tr>
        );
}

export default TableRow;