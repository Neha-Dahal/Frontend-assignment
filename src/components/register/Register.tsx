import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../formInput";

interface RegisterCredentials {
  username: string;
  email: string;
  address: string;
  phone: number | null;
  gender: string;
}

const Register = () => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    username: "",
    email: "",
    address: "",
    phone: null,
    gender: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log(
      credentials.username,
      credentials.email,
      credentials.address,
      credentials.phone,
      credentials.gender
    );
  };

  const isButtonDisabled: boolean =
    !credentials.username ||
    !credentials.email ||
    !credentials.address ||
    !credentials.phone ||
    !credentials.gender;

  return (
    <div className="container">
      <h2>Sign Up</h2>
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
            type="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            label="Email *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="text"
            name="address"
            placeholder="Enter your address"
            value={credentials.address}
            label="Address *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={credentials.phone || ""}
            label="Phone *"
            onChange={onChange}
          />
        </div>
        <div>
          <FormInput
            type="string"
            name="gender"
            placeholder="Enter your gender"
            value={credentials.gender}
            label="Gender *"
            onChange={onChange}
          />
        </div>
        <div>
          Already have an Account? <Link to="/login">Login</Link>
        </div>
        <div>
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleFormSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
