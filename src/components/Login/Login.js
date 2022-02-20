import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/logos/noinc.png";
import "./Login.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const userNameInputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log("SUBMIT LOGIN: " + username);
    dispatch({ username: username, type: "LOGIN" });
    props.onLogin();
  };

  return (
    <div className="login-container">
      <div className="box-wrapper">
        <div className="logo-box">
          <img src={logo} alt="Logo" />
        </div>
        <div className="form-box">
          <form onSubmit={onSubmitLogin}>
            <span>Login to Our Magic Portal</span>
            <input
              type="text"
              placeholder="Username"
              onChange={userNameInputChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={passwordInputChangeHandler}
            />
            <div>
              <button type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
