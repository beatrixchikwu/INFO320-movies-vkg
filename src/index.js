import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QueryEntryPage from './pages/QueryEntryPage';
import GenrePage from './pages/GenrePage';
import CrewPage from './pages/CrewPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviePage/>,
  },
  {
    path: "/actor",
    element: <ActorPage/>,
  },
  {
    path: "/crew",
    element: <CrewPage/>,
  },
  {
    path: "/genre",
    element: <GenrePage/>,
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


