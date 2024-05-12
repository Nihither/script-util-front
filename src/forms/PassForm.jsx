import { Form } from "react-router-dom"


export default function PassForm(props) {

  const password = props.passObj;

  return(
    <Form method="post" className="p-3">
      <div className="row mb-2">
        <label htmlFor="group" className="col-form-label col-2">Group</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="Group"
                 placeholder="Group"
                 name="group"
                 defaultValue={password?.group}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="title" className="col-form-label col-2">Title</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="Title"
                 placeholder="Title"
                 name="title"
                 defaultValue={password?.title}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="username" className="col-form-label col-2">Username</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="Username"
                 placeholder="Username"
                 required={true}
                 name="username"
                 defaultValue={password?.username}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="password" className="col-form-label col-2">Password</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="Password"
                 placeholder="Password"
                 required={true}
                 name="password"
                 defaultValue={password?.password}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="url" className="col-form-label col-2">URL</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="URL"
                 placeholder="URL"
                 name="url"
                 defaultValue={password?.url}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="notes" className="col-form-label col-2">Notes</label>
        <div className="col-auto">
          <input className="form-control"
                 type="text"
                 aria-label="Notes"
                 placeholder="Notes"
                 name="notes"
                 defaultValue={password?.notes}
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="expiry_time" className="col-form-label col-2">Expiry time</label>
        <div className="col-auto">
          <input className="form-control"
                 type="datetime-local"
                 aria-label="Expiry Time"
                 placeholder="Expiry time"
                 name="expiry_time"
                 defaultValue={password?.expiry_time}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="reset" className="btn btn-light">Reset</button>
      </div>
    </Form>
  )
}