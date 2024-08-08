import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Home_page from "./pages/Home_page";
import Authlayout from "./components/Authlayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddRecipe from "./pages/AddRecipe";
import AllRecipe from "./pages/AllRecipe";
import UserLayout from "./components/UserLayout";
import UserProfile from "./pages/UserProfile";
import OurRecipes from "./pages/OurRecipes";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home_page />,
      },
      {
        path: "/all-recipe",
        element: <AllRecipe />,
      },
      {
        path:"/our-recipes",
        element : <OurRecipes/>
      }
    ],
    // loader: () => {
    //   if (!localStorage.getItem("access_token")) {
    //     return redirect("/login");
    //   }

    //   return null;
    // },
  },
  {
    element: <Authlayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
    // loader: () => {
    //   if (localStorage.getItem("access_token")) {
    //     return redirect("/");
    //   }

    //   return null;
    // },
  },

  {
    element : <UserLayout/>,
    children : [
      {
        path : "/profile",
        element :  <UserProfile/>
      },
      {
        element: <AddRecipe />,
        path: "/add-edit",
      },
      {
        element: <AddRecipe />,
        path: "/add-edit/:id",
      },
    ]
  },

  
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
