import { Form } from "react-router-dom";


export default function LoginForm() {
  return(
    <Form method="post">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input className="form-control"
               type="text"
               name="username"
               aria-label="username"
               placeholder="Username"
               required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input className="form-control"
               type="password"
               name="password"
               aria-label="password"
               placeholder="Password"
               required={true}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">Sign in</button>
    </Form>
  )
}