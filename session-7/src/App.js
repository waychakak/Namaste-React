import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestarantMenu from "./components/RestaurantMenu";

const ApplyLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplyLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, 
      {
        path: "/about",
        element: <About />,
      }, 
      {
        path: "/contact",
        element: <Contact />,
      }, 
      {
        path: "/restaurant/:id",
        element: <RestarantMenu />,
      }, 
    ],
  }, 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
