import { redirect } from "react-router-dom";

import { deletePass } from "../../utils/passApi";


export async function action({request, params}) {
  
  const formData = await request.formData();
  const redirectUrl = Object.fromEntries(formData)["redirect-url"];
  const passId = params.passId;
  const response = await deletePass(passId);
  return redirect(redirectUrl);
}