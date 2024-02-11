import React from "react";
import LayOut from "./Component/LayOut/LayOut";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <LayOut/>,
      children: [
        {index:true, element: <Home/>},
        { path: "about", element: <About/> },
        { path: "portfolio", element: <Portfolio/> },
        { path: "contact", element: <Contact/> },






        
        { path: "*", element: <NotFound/> },

      ],
    },
  ]);

  return (<RouterProvider router={routers}></RouterProvider>) ;
}

