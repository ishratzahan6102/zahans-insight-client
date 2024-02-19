import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

import AllArticles from "../pages/AllArticles/AllArticles";
import Category from "../pages/Category/Category";
import Details from "../pages/Details/Details";
import MostPopularBanner from "../pages/MostPopularBanner/MostPopularBanner";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArticles/:category',
                element: <Category></Category>,
                 loader: ({params}) => fetch(`https://zahan-s-insight-server.vercel.app/allArticles/${params.category}`)
            },
            {
                path: '/mostPopular/:id',
                 element: <Details></Details>,
                 loader: ({params}) => fetch(`https://zahan-s-insight-server.vercel.app/mostPopular/${params.id}`)
            },
          
            {
                path: '/article/:id',
                element: <Details></Details>,
                 loader: ({params}) => fetch(`https://zahan-s-insight-server.vercel.app/article/${params.id}`)
            },
            {
                path: '/allArticles',
                element: <AllArticles></AllArticles>, 
            },
            {
                path: '/mostPopularBanner',
                element: <MostPopularBanner></MostPopularBanner>, 
            },

            
        ]
    }
])
