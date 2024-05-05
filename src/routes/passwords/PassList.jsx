import { Link, Form } from "react-router-dom";
import { HiOutlinePencilSquare as EditIcon, HiOutlineTrash as DeleteIcon } from "react-icons/hi2";


export default function PassList(props) {

  const passwords = props.passwords;
  const searchString = props.searchString;
  const url = props.url;

  if (searchString) {
    if (passwords) {
      return(
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Group</th>
              <th>Title</th>
              <th>Username</th>
              <th>Password</th>
              <th>URL</th>
              <th>Notes</th>
              <th>Expiry time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((pass) => (
              <tr key={pass.id}>
                <td>{pass.id}</td>
                <td>{pass.group}</td>
                <td>{pass.title}</td>
                <td>{pass.username}</td>
                <td>{pass.password}</td>
                <td>{pass.url}</td>
                <td>{pass.notes}</td>
                <td>{pass.expiry_time}</td>
                <td className="pass-options-icons">
                  <button><Link to={`/passwords/${pass.id}/edit`}>
                    <EditIcon />
                  </Link></button>
                  <Form method="post"
                    action={`/passwords/${pass.id}/delete`}
                    onSubmit={(event) => {
                      if (
                        !window.confirm(
                          "Please confirm you want to delete this record."
                        )
                      ) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <input type="text" name="redirect-url" value={url} hidden readOnly/>
                    <button type="submit"><DeleteIcon /></button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
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