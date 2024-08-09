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
import AirportDetail from "./pages/AirportDetail";
import { useEffect } from "react";
import axios from "axios";
import AddReview from "./pages/AddReview";
import EditReview from "./pages/EditReview";
import { Provider } from "react-redux";
import { store } from "./airport";

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
        return redirect('/login')
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
        path: "/airports/:airportCode",
        element: <AirportDetail />
      },
      {
        path: "/airports/:airportCode/reviews",
        element: <AddReview />
      },
      {
        path: "/airports/:airportCode/reviews/:id",
        element: <EditReview />
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
    // <Provider store={store}>
    // </Provider>
  )
}

export default App
