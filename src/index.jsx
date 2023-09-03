import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import JaneRosenzweig from './components/projectPages/JaneRosenzweig.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/jane-roszensweig-DEI-professional",
    element: <JaneRosenzweig />
  }
]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('app') );