import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Products from "./views/Products";
import Options from "./views/Options";
import Error from "./views/Error";
import {Box} from "@mui/material";
import OptionsUsers from "./views/OptionsUsers";
import OptionsPrices from "./views/OptionsPrices";
import OptionsProducts from "./views/OptionProducts";
import TestView from "./views/TestView";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "products",
                element: <Products/>,
            },
            {
                path: "options",
                children: [
                    {
                        index: true,
                        element: <Options/>,
                    },
                    // {
                    //     path: "manage-users",
                    //     element: <OptionsUsers/>,
                    // },
                    {
                        path: "manage-users",
                        children: [
                            {
                                index: true,
                                element: <OptionsUsers/>,
                            },
                            {
                                path: ':id',
                                element: <TestView/>,
                            },
                        ]
                    },
                    {
                        path: "manage-products",
                        element: <OptionsProducts/>,
                    },
                    {
                        path: "manage-prices",
                        element: <OptionsPrices/>,
                    },
                ]
            },
        ]
    },
]);


const App = () => {
    return (
        <Box>
                <RouterProvider router={router}/>
        </Box>
    );
}

export default App;