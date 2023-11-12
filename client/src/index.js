import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthContextProvider } from "./context/AuthContext";

import "jquery";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
      <App />
    {/* </AuthContextProvider> */}
  </React.StrictMode>
);


//npm install @popperjs/core --save 
