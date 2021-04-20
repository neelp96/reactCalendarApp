import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "../../component/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginSuccess, loginFailed } from "../../actions/user";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated, history } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;
    if (isAuthenticated && !prevIsAuthenticated) {
      history.push("/calender");
    }
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      const userFound = this.props.registerdUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (userFound) {
        this.props.loginSuccess(userFound);
      } else {
        this.props.loginFailed("User not found with this credentials.");
      }
    }
  };

  render() {
    const { error } = this.props;
    return (
      <div>
        <Login
          state={this.state}
          error={error}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { user } = state;
  return {
    registerdUsers: user.userData,
    error: user.error,
    isAuthenticated: user.isAuthenticated,
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: (obj) => dispatch(loginSuccess(obj)),
    loginFailed: (obj) => dispatch(loginFailed(obj)),
    dispatch,
  };
}

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  history: PropTypes.object,
  loginSuccess: PropTypes.func,
  loginFailed: PropTypes.func,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(LoginPage);
