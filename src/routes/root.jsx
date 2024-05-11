import { Link, Outlet, redirect, useLoaderData } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

import PassGen from './passwords/PassGen';
import { getCurrentUser } from '../api/authApi';
import {BsTerminal} from "react-icons/bs";


export function loader() {
  const userData = getCurrentUser();
  if (!userData) {
    return redirect("/login");
  }
  return userData;
}

export default function Root() {

  const userData = useLoaderData();

  return (
    <div className="d-flex vh-100">
      <div className="d-flex flex-column position-static flex-shrink-0 p-3 w-25 border-end border-1 border-secondary">
        <a href="/" className="d-flex align-items-center mb-2 text-decoration-none link-secondary">
          <BsTerminal className="me-2 fs-2"/>
          <span className="fs-3">Script Util</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to={`passwords`} className="nav-link link-dark">Пароли</Link>
          </li>
          <li>
            <Link to={`certs`} className="nav-link link-dark">Сертификаты</Link>
          </li>
        </ul>
        <hr/>
        <PassGen />
        <hr/>
        <div className="d-flex justify-content-between align-items-center">
          <span href="#" className="d-flex align-items-center text-decoration-none link-secondary">
            <RxAvatar className="me-2 fs-5"/>
            <strong className="fs-5">{userData ? userData.username : "Username"}</strong>
          </span>
          <Link to="" className="link-dark text-decoration-none">
            <BsTerminal className="fs-5"/>
          </Link>

        </div>
      </div>
      <div id="details" className="w-100 p-3">
        <Outlet/>
      </div>
    </div>
  )
}