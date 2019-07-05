import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
