import { Form } from "react-router-dom"


export default function PassForm(props) {

  const password = props.passObj;

  return(
    <Form method="post" className="">
      <div className="mb-2">
        <label htmlFor="group">Group</label>
        <input className="form-control"
          type="text"
          aria-label="Group"
          placeholder="Group"
          name="group"
          defaultValue={password?.group}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="title">Title</label>
        <input className="form-control"
          type="text"
          aria-label="Title"
          placeholder="Title"
          name="title"
          defaultValue={password?.title}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="username">Username</label>
        <input className="form-control"
          type="text"
          aria-label="Username"
          placeholder="Username"
          required={true}
          name="username"
          defaultValue={password?.username}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password">Password</label>
        <input className="form-control"
          type="text"
          aria-label="Password"
          placeholder="Password"
          required={true}
          name="password"
          defaultValue={password?.password}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="url">URL</label>
        <input className="form-control"
          type="text"
          aria-label="URL"
          placeholder="URL"
          name="url"
          defaultValue={password?.url}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="notes">Notes</label>
        <input className="form-control"
          type="text"
          aria-label="Notes"
          placeholder="Notes"
          name="notes"
          defaultValue={password?.notes}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="expiry_time">Expiry time</label>
        <input className="form-control"
          type="datetime-local"
          aria-label="Expiry Time"
          placeholder="Expiry time"
          name="expiry_time"
          defaultValue={password?.expiry_time}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="reset" className="btn btn-light">Reset</button>
      </div>
    </Form>
  )
}