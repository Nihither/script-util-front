import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import PassMenu from "./routes/passwords/PassMenu";
import CreatePass from "./routes/passwords/CreatePass";
import PassGen from "./routes/passwords/PassGen";
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
              path: "add",
              element: <CreatePass />,
            },
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