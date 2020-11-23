import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  login,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "luis@gmail.com",
    password: "1234abcd",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="E-Mail"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="pawssword"
          value={password}
          onChange={handleInputChange}
        />

        <hr />
        <button className="btn btn-primary btn-block">Login</button>
        <div className="auth__social-networks">
          <p>Login with Social Networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};
