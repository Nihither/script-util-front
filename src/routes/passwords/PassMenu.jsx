import { Form, Link, Outlet } from "react-router-dom"

export default function PassMenu() {

  return(
    <>
      <div id="section-header">
        <h2>Passwords</h2>
        <div>
          <Form
            method="GET"
            action="list"
          >
            <input type="search" role="search" id="searchString" name="search" aria-label="Search" placeholder="Search" />
            <div id="search-spnner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </Form>
          <Link to={`add`}>
            <button>New</button>
          </Link>
        </div>
      </div>
      <div id="pass-detail">
        <Outlet />
      </div>
    </>
  )
}