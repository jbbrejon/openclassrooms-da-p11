import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';



// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const ErrorLayout = () => (
  <>
    <Header />
    <Error />
    <Outlet />
  </>
);

// Set router
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorLayout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "accomodation/:id/",
      element: <Accomodation />,
    },]
  }
]);



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

