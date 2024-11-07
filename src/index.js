import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:7000';
createBrowserRouter([
  {
    path: '/',
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
