import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './reset.css'
import './styles.css'
import Home from './pages/Home';
import CatList from './pages/CatList';
import CatProfile from './pages/CatProfile';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, {
    path : '/all-cats',
    element: <CatList />
  }, {
    path: '/cat-profile/:id',
    element: <CatProfile />
  }, {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)