import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import CreatePost from "./pages/post";
import Photos from "./pages/photos";
import Profile from "./pages/profile";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/post",
        element: <CreatePost />,
        errorElement: <Error />,
      },
      {
        path: "/photos",
        element: <Photos />,
        errorElement: <Error />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);

export default router;
