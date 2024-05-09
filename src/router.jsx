import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/pages/Home";
import Movies from "./component/pages/Movies";
import Movie from "./component/Movie";
import Login from "./component/pages/Login";
import UserProvider from "./context/User";


export const router = createBrowserRouter([
    {
        element :(
            <UserProvider >
                <App />
            </UserProvider>
        )  ,
        children :[
            {
                path :'/',
                element : <Home />
            },
            {
                path :'/login',
                element : <Login />
            },
            {
                path:'/movies',
                element : <Movies />
            },
            {
                path:'/movies/:id',
                element : <Movie />
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