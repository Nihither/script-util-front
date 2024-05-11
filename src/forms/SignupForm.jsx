import { Form } from "react-router-dom";

export default function SignupForm() {
  return(
    <Form method="POST" className="form">
      <label htmlFor="username">
        <span>Username</span>
        <input type="text" 
          name="username"
          placeholder="Username"
          aria-label="username"
          required={true}
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input type="email" 
          name="email"
          placeholder="Email"
          aria-label="email"
          required={true}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input type="text" 
          name="password"
          placeholder="Password"
          aria-label="password"
          required={true}
        />
      </label>
      <button type="submit">Sign Up</button>
    </Form>
  )
}