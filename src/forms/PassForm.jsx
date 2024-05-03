import { Form } from "react-router-dom"

export default function PassForm(props) {

  const password = props.passObj;

  return(
    <Form method="post" id="password-form">
      <label>
        <span>Group</span>
        <input 
          type="text" 
          aria-label="Group" 
          placeholder="Group" 
          name="group" 
          defaultValue={password?.group}
        />
      </label>
      <label>
        <span>Title</span>
        <input 
          type="text" 
          aria-label="Title"
          placeholder="Title"
          name="title"
          defaultValue={password?.title}
        />
      </label>
      <label>
        <span>Username</span>
        <input
          type="text"
          aria-label="Username"
          placeholder="Username"
          name="username"
          defaultValue={password?.username}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="text"
          aria-label="Password"
          placeholder="Password"
          name="password"
          defaultValue={password?.password}
        />
      </label>
      <label>
        <span>URL</span>
        <input
          type="url"
          aria-label="URL"
          placeholder="URL"
          name="url"
          defaultValue={password?.url}
        />
      </label>
      <label>
        <span>Notes</span>
        <input
          type="text"
          aria-label="Notes"
          placeholder="Notes"
          name="notes"
          defaultValue={password?.notes}
        />
      </label>
      <label>
        <span>Expiry time</span>
        <input
          type="datetime-local"
          aria-label="Expiry Time"
          placeholder="Expiry time"
          name="expiry_time"
          defaultValue={password?.expiry_time}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </p>
    </Form>
  )
}