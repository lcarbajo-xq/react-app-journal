import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Luis",
    email: "luis@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);
  };

  const isFormValid = () => {
    //
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="E-Mail"
          name="email"
          autoComplete="off"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />

        <hr />
        <button className="btn btn-primary btn-block mb-5">Register</button>

        <Link className="link" to="/auth/register">
          Already Registered?
        </Link>
      </form>
    </>
  );
};
