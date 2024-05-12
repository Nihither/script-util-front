import {useActionData, useLoaderData} from 'react-router-dom';

import PassForm from '../../forms/PassForm';
import {getPassById, updatePass} from '../../api/passApi';


export async function loader({params}) {

  let passObj = getPassById(params.passId)
  return(passObj)
}

export async function action({request, params}) {

  const formData = await request.formData();
  const passObj = Object.fromEntries(formData);
  return await updatePass(params.passId, passObj)
}

export default function UpdatePass() {

  const passObj = useLoaderData();
  const actionData = useActionData();

  if (actionData) {
    return(
      <p>{actionData}</p>
    )
  } else {
    return(
      <PassForm passObj={passObj} />
    )
  }
}