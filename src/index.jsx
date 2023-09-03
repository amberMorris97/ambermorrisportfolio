import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import JaneRosenzweig from './components/projectPages/JaneRosenzweig.jsx';
import DigIt from './components/projectPages/JaneRosenzweig.jsx';
import Unshiftly from './components/projectPages/Unshiftly.jsx';
import BlockchainsExplained from './components/projectPages/BlockchainsExplained.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/jane-roszensweig-DEI-professional",
    element: <JaneRosenzweig />
  },
  {
    path: "/dig-it",
    element: <DigIt />
  },
  {
    path: "/blockchains-explained",
    element: <BlockchainsExplained />
  },
  {
    path: "/unshiftly",
    element: <Unshiftly />
  }
]);

ReactDOM.render( <RouterProvider router={router} />, document.getElementById('app') );