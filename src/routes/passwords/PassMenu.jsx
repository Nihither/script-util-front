import { Form, Link, Outlet, useLoaderData } from "react-router-dom"
import { useEffect } from "react";

import { searchPass } from "../../utils/passApi";
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
      <div id="section-header">
        <h2>Passwords</h2>
        <div>
          <Form method="GET" role="search">
            <input type="search" role="search" id="searchString" name="search" aria-label="Search" placeholder="Search" 
              defaultValue={searchString}
            />
            <div id="search-spnner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </Form>
          <Link to={`add`}>
            <button>New</button>
          </Link>
        </div>
      </div>
      <div id="pass-detail">
        {searchString ? <PassList passwords={passwords} searchString={searchString} url={url} /> : <Outlet />}
      </div>
    </>
  )
}