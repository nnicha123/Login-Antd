import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Input, InputNumber, Button } from 'antd';
import Register from './Register'

function App() {
  return (
    <div className="App">
      <div className="innerDiv">
        <Register />
      </div>
    </div>
  );
}

export default App;
