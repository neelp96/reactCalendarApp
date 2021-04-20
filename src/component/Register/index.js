import React from "react";
import SignLogo from "../../images/side.png";
import { Link } from "react-router-dom";

const Register = ({ handleRegisterForm, handleChange, state }) => {
  return (
    <div class="container login-container" style={{ maxWidth: "100%" }}>
      <div className="row" style={{ backgroundColor: "#e4f2f7" }}>
        <div class="col-md-6 login-form-1">
          <img
            src={SignLogo}
            alt="signin logo"
            style={{ width: "100%", height: "100vh" }}
          />
        </div>
        <div class="col-md-6 login-form-2 m-auto p-5">
          <div>
            <div className="register" style={{ backgroundColor: "white" }}>
              <h3 style={{ color: "blue" }}>Register</h3>
              <form onSubmit={handleRegisterForm}>
                <div class="form-group">
                  <label>
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Business Name *"
                    name="businessName"
                    onChange={(e) => handleChange(e)}
                    value={state.businessName}
                    required
                  />
                </div>
                <div class="form-group">
                  <label>
                    <b>Phone No.</b>
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    onChange={(e) => handleChange(e)}
                    name="phone"
                    value={state.phone}
                    placeholder="Your Phone Number *"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>
                    <b>Email Adderss</b>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={state.email}
                    placeholder="Email Address *"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password *"
                    onChange={(e) => handleChange(e)}
                    name="password"
                    value={state.password}
                    required
                  />
                </div>

                <div class="d-flex justify-content-between">
                  <div className="form-group">
                    Already have an account?&nbsp;
                    <Link to="/login">
                      <a href="#" className="ForgetPwd" value="Login">
                        Login
                      </a>
                    </Link>
                  </div>
                  <div class="form-group primary">
                    <input
                      type="submit"
                      class="btnSubmit btn btn-primary"
                      value="Register"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <a href="#" class="ForgetPwd" value="Login">
                    I have accept privcy policy and terms of swan beauty
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
