import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Portal from "../../components/Portal/Portal";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import News from "../../Shared/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/portal',
                element: <Portal></Portal>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
}
])