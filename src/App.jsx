import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, {loader as rootLoader} from "./routes/root";
import ErrorPage from "./error-page";
import PassMenu, {loader as passMenuLoader} from "./routes/passwords/PassMenu";
import CreatePass, {action as createPassAction} from "./routes/passwords/CreatePass";
import UpdatePass, {loader as updatePassLoader, action as updatePassAction} from "./routes/passwords/UpdatePass";
import {action as deletePassAction} from "./routes/passwords/DeletePass";
import CertMenu from "./routes/certs/CertMenu";
import Login, {action as loginAction} from "./routes/auth/Login";
import Signup, {action as signupAction} from "./routes/auth/Signup";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      action: loginAction,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
      action: signupAction,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "passwords",
          element: <PassMenu />,
          loader: passMenuLoader,
          children: [
            {
              path: "add",
              element: <CreatePass />,
              action: createPassAction,
            },
            {
              path: ":passId/edit",
              element: <UpdatePass />,
              loader: updatePassLoader,
              action: updatePassAction,
              errorElement: <ErrorPage />
            },
            {
              path: ":passId/delete",
              action: deletePassAction,
            }
          ]
        },
        {
          path: "certs",
          element: <CertMenu />,
        },
      ]
    },
  ])

  return(
    <RouterProvider router={router} />
  )
}