import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/layout/layout';
import About from './pages/About';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Register from './pages/Register';
import Signin from './pages/Signin';

const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
             path:"",
             element:<Home/>

            },
            {
             path:"about",
             element:<About/>
             
            },
            {
             path:"contact",
             element:<Contact/>
             
            },
            {
                path:"wishlist",
                element:<Wishlist/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"signin",
                element:<Signin/>
            }
        ]

    }
])

export default myRouter
