// Import React modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, } from "react-router-dom";
import Router from './utils/Router';

// Import css
import './index.css';



// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));






root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);