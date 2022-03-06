import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
  </React.Fragment>,
  document.getElementById('root')
);
