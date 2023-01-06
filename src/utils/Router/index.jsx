// Import React modules
import { createBrowserRouter, Outlet } from "react-router-dom";

// Import components
import Header from '../../components/Header'
import Error from '../../components/Error';
import Footer from '../../components/Footer';

// Import pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Accomodation from '../../pages/Accomodation';

// Set standard layout (Header/Page/Footer)
const Layout = () => (
    <>
        <div className='container'>
            <Header />
            <Outlet />
        </div>
        <Footer />
    </>
);

// Set error layout (Header/Error component/Footer)
const ErrorLayout = () => (
    <>
        <div className='container'>
            <Header />
            <Error />
            <Outlet />
        </div>
        <Footer />
    </>
);

// Router configuration
const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorLayout />,
        children: [{
            path: "/",
            element: <Home />,
        },
        {
            path: "a-propos",
            element: <About />,
        },
        {
            path: "logement/:id/",
            element: <Accomodation />,
        },]
    }
]);



export default Router