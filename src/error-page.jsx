import { useRouteError } from "react-router-dom";


export default function ErrorPage() {

  const error = useRouteError();
  console.error(error);

  return(
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="text-secondary">Keep colm and go Home</a>
    </div>
  )
}