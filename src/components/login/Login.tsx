import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../formInput";

import "./login.styles.css";

interface LoginCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(credentials.username, credentials.password);
  };

  const isButtonDisabled: boolean =
    !credentials.username || !credentials.password;

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div>
          <FormInput
            type="text"
            name="username"
            placeholder="Enter your username"
            value={credentials.username}
            label="Username *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            label="Password *"
            onChange={onChange}
          />
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link>
        </div>
        <div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleFormSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
