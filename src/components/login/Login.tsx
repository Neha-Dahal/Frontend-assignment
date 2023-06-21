import React, { useState, ChangeEvent } from "react";

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const isButtonDisabled: boolean =
    !credentials.username || !credentials.password;

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" disabled={isButtonDisabled}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
