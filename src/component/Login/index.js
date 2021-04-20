import React from "react";
import SignLogo from "../../images/side.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="container login-container" style={{ maxWidth: "100%" }}>
      <div className="row" style={{ backgroundColor: "#e4f2f7" }}>
        <div className="col-md-6 login-form-1">
          <img
            src={SignLogo}
            alt="signin logo"
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <div className="col-md-6 login-form-2 m-auto p-5">
          <div>
            <div className="register" style={{ backgroundColor: "white" }}>
              <h3 style={{ color: "blue" }}>Login</h3>
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                    onChange={props.handleChange}
                    name="email"
                  />
                  {props.state.submitted && !props.state.email && (
                    <div className="help-block has-error">
                      Email is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    onChange={props.handleChange}
                    name="password"
                  />
                  {props.state.submitted && !props.state.password && (
                    <div className="help-block has-error">
                      Password is required
                    </div>
                  )}
                </div>
                {props.error && (
                  <div className="help-block has-error">{props.error}</div>
                )}
                <div className="d-flex justify-content-between">
                  <div className="form-group">
                    Don't have an account?&nbsp;
                    <Link to="/register">
                      <a href="#" className="ForgetPwd" value="Login">
                        Register
                      </a>
                    </Link>
                  </div>
                  <div className="form-group">
                    <input
                      type="button"
                      className="btnSubmit btn btn-primary"
                      value="Login"
                      onClick={props.handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  state: PropTypes.object,
};

export default Login;
