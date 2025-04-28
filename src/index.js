import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './reset.css'
import './styles.css'
import routes from './routes';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)