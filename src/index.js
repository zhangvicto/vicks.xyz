import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { HashRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

//reportWebVitals();
