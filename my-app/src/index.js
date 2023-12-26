import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./index.css"
import App from './App';
import { IndexStyles } from './Index.Styles.Js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <IndexStyles />
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);