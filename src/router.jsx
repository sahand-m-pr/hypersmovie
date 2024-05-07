import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/pages/Home";
import Movies from "./component/pages/Movies";


export const router = createBrowserRouter([
    {
        element : <App />,
        children :[
            {
                path :'/',
                element : <Home />
            },
            {
                path:'/movies',
                element : <Movies />
            },
            {
                path:'/tv',
                element : <Movies />
            },
            {
                path:'/people',
                element : <Movies />
            },
            {
                path:'/more',
                element : <Movies />
            },
            {
                path:'/login',
                element : <Movies />
            },
            {
                path:'/signup',
                element : <Movies />
            },
            {
                path:'/movies',
                element : <Movies />
            },
            {
                path:'/movies',
                element : <Movies />
            }
        ]
    }
])