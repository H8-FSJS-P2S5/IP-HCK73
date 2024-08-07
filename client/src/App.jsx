import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import GameDetails from "./pages/GameDetails";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
// import './App.css'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/games/:id",
        element: <GameDetails />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
