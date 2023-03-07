import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./components/home/home";
import Housing from "./components/housing/housing";
import About from "./components/about/about";
import Error404 from "./components/error404/error404";

const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error404 />},

    { path: "/housing/:id", element: <Housing />, errorElement: <Error404 />},

    { path: "/about", element: <About />, errorElement: <Error404 />},

    { path: "/404", element: <Error404 />},

]);
        

        export default router;