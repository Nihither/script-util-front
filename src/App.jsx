import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import PassMenu, {loader as passMenuLoader} from "./routes/passwords/PassMenu";
import CreatePass, {action as createPassAction} from "./routes/passwords/CreatePass";
import UpdatePass, {loader as updatePassLoader, action as updatePassAction} from "./routes/passwords/UpdatePass";
import {action as deletePassAction} from "./routes/passwords/DeletePass";
import CertMenu from "./routes/certs/CertMenu";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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