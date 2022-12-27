import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Error from './components/Error';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Footer from './components/Footer';



// Set root element
const root = ReactDOM.createRoot(document.getElementById('root'));

const Layout = () => (
  <>
    <div className='container'>
      <Header />
      <Outlet />
    </div>
    <Footer />
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

