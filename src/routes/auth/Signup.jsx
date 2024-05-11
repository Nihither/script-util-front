import { redirect, useActionData } from 'react-router-dom';
import SignupForm from '../../forms/SignupForm';
import { signup } from '../../api/authApi';


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
    <>
      <SignupForm />
      {
        response && 
        <p>
          {response}
        </p>
      }
    </>
  )
}