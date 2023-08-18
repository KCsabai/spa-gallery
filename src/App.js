import React from 'react';
import Header from './app/layout/Header';
import './App.css';
import Content from './app/layout/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
