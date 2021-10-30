import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFCP } from 'web-vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

getFCP(console.log);
