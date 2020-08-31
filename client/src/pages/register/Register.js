import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Landing from '../../components/layout/landing/Landing';

import './Register.scss';

const Register = () => {
	const [ form, setForm ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
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

	const { name, email, password, password2 } = form;

	return (
		<Fragment>
			<Landing />
			<div className="register-page">
				<div className="register-form">
					<h2>Register your account</h2>
					<form onSubmit={onSubmit}>
						<div className="form-item">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								className="form-input"
								onChange={onChange}
								value={name}
								disabled
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
						<div className="form-item">
							<label htmlFor="password2">Confirm Password</label>
							<input
								type="password"
								name="password2"
								className="form-input"
								onChange={onChange}
								value={password2}
								disabled
							/>
						</div>
						<input type="submit" className="btn btn-secondary" value="Sign up" disabled />
					</form>
					<p>
						Already have an account? <Link to="/signin">Sign In</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;