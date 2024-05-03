import { useLoaderData } from "react-router-dom";
import { searchPass } from "../../utils/passApi";

export async function loader({request}) {
  const url = new URL(request.url);
  const searchString = url.searchParams.get("search");
  if (searchString) {
    const passwords = await searchPass(searchString);
    return {searchString, passwords}
  } else {
    return {searchString}
  }
}

export default function PassList() {

  const {passwords, searchString} = useLoaderData();
  console.log(passwords);

  if (searchString) {
    if (passwords) {
      return(
        <ul>
          {passwords.map((pass) => (
            <li key={pass.id}>{pass.id} {pass.group} {pass.username} {pass.password}</li>
          ))}
        </ul>
      )
    } else {
      return(
        <p>No Content</p>
      )
    }
  } else {
    return(
      <p>Enter search string at the field above</p>
    )
  }

}