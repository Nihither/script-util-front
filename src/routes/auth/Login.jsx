import { useActionData, redirect } from "react-router-dom";
import LoginForm from "../../forms/LoginForm";
import { signin } from "../../api/authApi";
import { getCurrentUser } from "../../api/authApi";


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
    <>
      <LoginForm />
      {
        actionData &&
        <p>
          {actionData}
        </p>
      }
    </>
  )
}