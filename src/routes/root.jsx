import { Link, Outlet } from 'react-router-dom';

import PassGen from './passwords/PassGen';


export default function Root() {
  
  return(
    <>
      <div id="sidebar">
        <div id="username">Username</div>
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