import React from "react";
import logoSrc from "./login.png";

const Register = (props) => {
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Sign Up</div>
      <div className="content">
        <div className="image">
          <img src={logoSrc} alt="Register Now" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
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
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
