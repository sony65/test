import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import data from '../test_data.json';

const columns = [
  {
    key: 'number/date',
    title: 'Номер/Дата',
    fieldRefiner: (data) => {
      const date = new Date(data.created_date);

      return {
        title: data.id,
        subtitle: format(date, 'yyyy-MM-dd HH:mm'),
      };
    }
  },
  {
    key: 'type/author',
    title: 'Тип задания/Автор',
    fieldRefiner: (data) => ({
      title: data.id,
      subtitle: Date.parse(data.created_date),
    })
  },
  {
    key: 'account/terminal',
    title: 'Аккаунт/Терминал',
    // fieldName: 'account.name',
    fieldRefiner: (data) => ({
      title: data.id,
      subtitle: Date.parse(data.created_date),
    })
  },
  {
    key: 'status',
    title: 'Статус',
    // fieldName: 'status',
    fieldRefiner: (data) => <div>{data.status}</div>
  },
];

const MainPage = () => {

    const [editData, setEditData] = useState([]);

    useEffect(() => {
        setEditData(data);
    }, [data]);

    console.log(editData);

    return (
        <div>
            <Table 
                data={editData} 
                columns={columns} 
            />
        </div>
    );
};

export default MainPage;