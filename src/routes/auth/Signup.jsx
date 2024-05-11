import { redirect, useActionData } from 'react-router-dom';
import SignupForm from '../../forms/SignupForm';
import { signup } from '../../api/authApi';
import {RxAvatar, RxExclamationTriangle} from "react-icons/rx";
import LoginForm from "../../forms/LoginForm";


export async function action({request}) {
  const formData = await request.formData();
  const signupObj = Object.fromEntries(formData);
  const response = await signup(signupObj);
  if (response === "User registered successfully.") {
    return redirect("/login");
  }
  return response;
}

export default function Signup() {

  const response = useActionData();

  return(
    <div className="container">
      <div className="row d-flex vh-100 justify-content-center align-items-center">
        <div className="col-auto">
          <div className="card p-5">
            <div className="card-body">
              <RxAvatar className="card-img-top mb-3" size="7rem"/>
              <h2 className="card-title text-center mb-3">Sign Up</h2>
              <SignupForm />
              {
                response &&
                <p className="card-text text-center text-danger p-3">
                  <RxExclamationTriangle className="m-1" />
                  {response}
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}