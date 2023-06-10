import React from "react";
import logoSrc from "./login.png";

import "./style.scss";

const Login = (props) => {
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={logoSrc} alt="not found" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username/Email</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
