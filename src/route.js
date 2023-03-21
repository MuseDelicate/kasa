import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import Housing from "./components/housing/Housing";
import About from "./components/about/About";
import Error404 from "./components/error404/Error404";

const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error404 />},

    { path: "/housing/:id", element: <Housing />, errorElement: <Error404 />},

    { path: "/about", element: <About />, errorElement: <Error404 />},

    { path: "/404", element: <Error404 />},

]);
        

        export default router;