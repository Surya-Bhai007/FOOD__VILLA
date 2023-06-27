import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
// Default import
import Header from "./src/components/Header";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Restaurant_Menu from "./src/components/Restaurant_Menu";

//----------CONFIG DRIVEN UI--------------

const App_layout = () => (
  <>
    {/* <Obj.Header  /> */}
    <Header key={"head"} />
    <Outlet />
    <Footer key={"footer"} />
  </>
);
//Routers : ReactRouterDOM
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App_layout />,
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
        path: "/restaurants/:res_id",
        element: <Restaurant_Menu />,
      },
    ],
  },
]);

//----Initializing Root and render---
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
// Root.render(<App_layout key={"app_layout"} />);
