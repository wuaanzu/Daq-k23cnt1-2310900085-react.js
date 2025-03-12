import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DaqApp from './DaqApp';
import reportWebVitals from './reportWebVitals';

const Daqroot = ReactDOM.createRoot(document.getElementById('Daqroot'));
Daqroot.render(
  <React.StrictMode>
    <DaqApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
