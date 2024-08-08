import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Home_page from "./pages/Home_page";

const router = createBrowserRouter([
  {
    element : <PublicLayout/>,
    children :[
      {
        path : "/",
        element : <Home_page/>
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} /> 
}

export default App;
