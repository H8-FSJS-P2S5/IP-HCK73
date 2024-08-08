import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import AirportList from "./pages/AirportList";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem('access_token')) {
        return redirect('/')
      }
      return null
    }
  },
  {
    path: '/register',
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.getItem('access_token')) {
        return redirect('/')
      }
      return null
    }
  },
  {
    element: <MainLayout />,
    loader: () => {
      if (!localStorage.getItem('access_token')) {
        return redirect('/ogin')
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/airports",
        element: <AirportList />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
