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
        <table>
          <thead>
            <th>Id</th>
            <th>Group</th>
            <th>Title</th>
            <th>Username</th>
            <th>Password</th>
            <th>URL</th>
            <th>Notes</th>
            <th>Expiry time</th>
            <th></th>
          </thead>
          {passwords.map((pass) => (
            <tbody>
              <td>{pass.id}</td>
              <td>{pass.group}</td>
              <td>{pass.title}</td>
              <td>{pass.username}</td>
              <td>{pass.password}</td>
              <td>{pass.url}</td>
              <td>{pass.notes}</td>
              <td>{pass.expiry_time}</td>
              <td>
                <span>V</span>
                <span>E</span>
                <span>D</span>
              </td>
            </tbody>
          ))}
        </table>
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