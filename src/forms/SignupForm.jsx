import { Form } from "react-router-dom";


export default function SignupForm() {
  return(
    <Form method="POST">
      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input className="form-control" id="username"
               type="text"
               name="username"
               placeholder="Username"
               aria-label="username"
               required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input className="form-control"
               type="email"
               name="email"
               placeholder="Email"
               aria-label="email"
               required={true}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input className="form-control"
               type="password"
               name="password"
               placeholder="Password"
               aria-label="password"
               required={true}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">Sign up</button>
    </Form>
  )
}