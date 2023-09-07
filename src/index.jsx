import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './public/styles/main.css';

ReactDOM.render( <App />, document.getElementById('app') );