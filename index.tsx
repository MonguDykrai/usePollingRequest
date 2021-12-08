import React, { createContext, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Posts from './Posts';
import { Select } from 'antd';
import 'antd/dist/antd.css';

export const Context = createContext({ selected: '0' });
const { Option } = Select;

const App = () => {
  const [selected, setSelected] = useState('0');
  return (
    <div>
      <Select defaultValue="0" onChange={(v) => setSelected(v)}>
        <Option value="0">0s</Option>
        <Option value="1">1s</Option>
        <Option value="2">2s</Option>
      </Select>
      <Context.Provider value={{ selected }}>
        <Posts />
      </Context.Provider>
    </div>
  );
};

render(<App />, document.getElementById('root'));
