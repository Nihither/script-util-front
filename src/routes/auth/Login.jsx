import {useActionData, redirect} from "react-router-dom";
import {RxAvatar, RxExclamationTriangle} from "react-icons/rx";

import LoginForm from "../../forms/LoginForm";
import {signin} from "../../api/authApi";
import {getCurrentUser} from "../../api/authApi";


export async function action({request}) {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  const response = await signin(loginData);
  const userData = getCurrentUser();
  if (userData) {
    return redirect("/");
  }
  return response;
}

export default function Login() {
  const actionData = useActionData();

  return(
    <div className="container">
      <div className="row d-flex vh-100 justify-content-center align-items-center">
        <div className="col-auto">
          <div className="card p-5">
            <div className="card-body">
              <RxAvatar className="card-img-top mb-3" size="7rem"/>
              <h2 className="card-title text-center mb-3">Login</h2>
              <LoginForm />
              {
                actionData &&
                <p className="card-text text-center text-danger p-3">
                  <RxExclamationTriangle className="m-1" />
                  {actionData}
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}