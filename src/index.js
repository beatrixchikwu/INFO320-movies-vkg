import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ActorPage from './pages/ActorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QueryEntryPage from './pages/QueryEntryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/actor",
    element: <ActorPage/>,
  },
  {
    path: "/query-entry",
    element: <QueryEntryPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();


