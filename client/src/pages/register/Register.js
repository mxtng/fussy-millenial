import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Landing from "../../components/layout/landing/Landing";
import Alert from "../../components/alert/Alert";
import { showAlert, hideAlert } from "../../redux/actions/alert";
import { registerUser } from "../../redux/actions/auth";

import "./Register.scss";

const Register = ({ showAlert, hideAlert, registerUser, authenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return showAlert("Password do not match.");
    }
    registerUser(formData);
  };

  // Unsubscribe alert
  useEffect(() => {
    return () => {
      hideAlert();
    };
  }, [hideAlert]);

  // Authenticated user redirect to main page
  if (authenticated) return <Redirect to="/" />;

  return (
    <Fragment>
      <Landing />
      <div className="register-page">
        <div className="register-form">
          <h2>Register your account</h2>
          <Alert />
          <form onSubmit={onSubmit}>
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                onChange={onChange}
                value={name}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-input"
                onChange={onChange}
                value={email}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password (min. 6 characters)</label>
              <input
                type="password"
                name="password"
                className="form-input"
                onChange={onChange}
                value={password}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                className="form-input"
                onChange={onChange}
                value={password2}
              />
            </div>
            <input
              type="submit"
              className="btn btn-secondary"
              value="Sign up"
            />
          </form>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated,
});

export default connect(mapStateToProps, { showAlert, hideAlert, registerUser })(
  Register
);
