import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import './Signin.scss';

const Signin = () => {
	const [ form, setForm ] = useState({
		email: '',
		password: ''
	});

	const onChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	const { email, password } = form;

	return (
		<Fragment>
			<div className="landing" />
			<div className="signin-page">
				<div className="signin-form">
					<h2>Sign in to your account</h2>
					<form onSubmit={onSubmit}>
						<div className="form-item">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								className="form-input"
								onChange={onChange}
								value={email}
								disabled
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
								disabled
							/>
						</div>

						<input type="submit" className="btn btn-secondary" value="Sign in" disabled />
					</form>
					<p>
						Don't have an account? <Link to="/register">Sign up</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Signin;
