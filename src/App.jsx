import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import PassMenu from "./routes/passwords/PassMenu";
import PassList, {loader as passListLoader} from "./routes/passwords/PassList";
import CreatePass from "./routes/passwords/CreatePass";
import UpdatePass, {loader as updatePassLoader} from "./routes/passwords/UpdatePass";
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
          children: [
            {
              path: "list",
              element: <PassList />,
              loader: passListLoader,
            },
            {
              path: "add",
              element: <CreatePass />,
            },
            {
              path: ":passId/edit",
              element: <UpdatePass />,
              loader: updatePassLoader,
              errorElement: <ErrorPage />
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