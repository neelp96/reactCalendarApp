import React, { Component } from "react";
import { connect } from "react-redux";
import { requestRegister } from "../../actions/user";
import Register from "../../component/Register";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  handleRegisterForm = (e) => {
    e.preventDefault();
    const { businessName, phone, email, password } = this.state;
    const payload = {
      businessName,
      phone,
      email,
      password,
    };
    this.props.requestRegister(payload);
  };

  componentDidUpdate(prevProps) {
    const { userData, history } = this.props;
    const { userData: prevUserData } = prevProps;
    if (userData.length !== prevUserData.length) {
      history.push("/login");
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <Register
          handleChange={this.handleChange}
          handleRegisterForm={this.handleRegisterForm}
          state={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    userData: user.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestRegister: (user) => dispatch(requestRegister(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
