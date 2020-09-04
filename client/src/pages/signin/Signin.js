import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Landing from "../../components/layout/landing/Landing";
import { loginUser } from "../../redux/actions/auth";
import Alert from "../../components/alert/Alert";

import { showAlert } from "../../redux/actions/alert";

import "./Signin.scss";

const Signin = ({ loginUser, authenticated, showAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return showAlert("Invalid credentials");

    loginUser(formData);
  };

  if (authenticated) return <Redirect to="/" />;

  return (
    <Fragment>
      <Landing />
      <div className="signin-page">
        <div className="signin-form">
          <h2>Sign in to your account</h2>
          <Alert />
          <form onSubmit={onSubmit}>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                onChange={onChange}
                value={password}
              />
            </div>

            <input
              type="submit"
              className="btn btn-secondary"
              value="Sign in"
            />
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated,
});

export default connect(mapStateToProps, { loginUser, showAlert })(Signin);
