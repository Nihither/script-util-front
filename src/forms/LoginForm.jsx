import { Form } from "react-router-dom";

export default function LoginForm() {
  return(
    <Form method="post" className="form">
      <label htmlFor="username">
        <span>Username</span>
        <input type="text" 
          name="username"
          aria-label="username"
          placeholder="Username"
          required={true}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input type="password" 
          name="password"
          aria-label="password"
          placeholder="Password"
          required={true}
        />
      </label>
      <button type="submit">Sign in</button>
    </Form>
  )
}