import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/home/home";
import Housing from "./components/housing/housing";
import About from "./components/about/about";
import Error404 from "./components/error404/error404";


const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path = "/" element = {<Home />}/*, errorElement = {<ErrorRoute />} */></Route>

                <Route path = "/housing" element = {<Housing />} ></Route>

                <Route path = "/about" element = {<About />}/*, errorElement = {<ErrorRoute />} */></Route>

                <Route path = "/404" element = {<Error404 />} ></Route>

            </>
        )
);

        export default router;