import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./index.css"
import App from './app';
import { IndexStyles } from './index-styles.js';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <IndexStyles />
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </>
);