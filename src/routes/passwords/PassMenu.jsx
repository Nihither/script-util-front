import { Form, Link, Outlet, useLoaderData } from "react-router-dom"
import { useEffect } from "react";

import { searchPass } from "../../api/passApi";
import PassList from '../passwords/PassList';


export async function loader({request}) {

  const url = new URL(request.url);
  const searchString = url.searchParams.get("search");

  if (searchString) {
    const passwords = await searchPass(searchString);
    return {url, searchString, passwords}
  } else {
    return {url, searchString}
  }
}

export default function PassMenu() {

  const {passwords, searchString, url} = useLoaderData();
  useEffect(() => {
    document.getElementById("searchString").value = searchString;
  }, [searchString]);

  return(
    <>
      <nav className="navbar p-0 pb-3">
        <div className="container-fluid d-flex align-items-center">
          <span className="navbar-brand fs-3 me-auto">Пароли</span>
          <form className="d-flex" role="search">
            <input className="form-control"
                   type="search"
                   role="search"
                   id="searchString"
                   name="search"
                   aria-label="Search"
                   placeholder="Search"
                   defaultValue={searchString}
            />
          </form>
          <Link to={`add`} className="ps-2">
            <button className="btn btn-primary">New</button>
          </Link>
        </div>
      </nav>
      <div id="pass-detail">
        {searchString ? <PassList passwords={passwords} searchString={searchString} url={url}/> : <Outlet/>}
      </div>
    </>
  )
}