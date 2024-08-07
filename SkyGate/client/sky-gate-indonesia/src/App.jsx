import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
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
