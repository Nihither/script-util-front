import { Link, Outlet, redirect, useLoaderData } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";
import PassGen from './passwords/PassGen';
import { getCurrentUser } from '../api/authApi';


export function loader() {
  const userData = getCurrentUser();
  if (!userData) {
    return redirect("/login");
  }
  return userData;
}

export default function Root() {

  const userData = useLoaderData();
  
  return(
    <>
      <div id="sidebar">
        <div id="username">
          <RxAvatar />
          {userData ? userData.username : "Username"}
        </div>
        <div>
          <h2>
            <a href="/">Script Util</a>
          </h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`passwords`}>Пароли</Link>
            </li>
            <li>
              <Link to={`certs`}>Сертификаты</Link>
            </li>
          </ul>
        </nav>
        <PassGen />
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}