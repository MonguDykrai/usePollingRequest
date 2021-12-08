import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import usePollingRequest from './usePollingRequest';

const columns = [
  {
    title: 'userId',
    dataIndex: 'userId',
    key: 'id',
  },
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'body',
    dataIndex: 'body',
  },
];

const Posts: React.FC = () => {
  const [data, setData] = useState([]);
  const requestPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(1);
        setData(json);
      });
  };
  usePollingRequest(requestPosts);
  useEffect(() => {
    requestPosts();
  }, []);
  return <Table columns={columns} dataSource={data} />;
};

export default Posts;
