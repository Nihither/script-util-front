import { useActionData, Link } from "react-router-dom";

import PassForm from "../../forms/PassForm"
import { createPass } from "../../api/passApi"


export async function action({request}) {

  const formData = await request.formData();
  const passObj = Object.fromEntries(formData);
  const response = await createPass(passObj);
  return response;
}

export default function CreatePass() {

  const actionData = useActionData();
  
  if (actionData) {
    return(
      <>
      <p>{actionData}</p>
      <button><Link to=".">Add another one</Link></button>
      </>
    )
  } else {
    return(
      <PassForm />
    )
  }
}