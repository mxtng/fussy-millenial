import React, { Fragment, useState } from 'react';

import './Main.scss';

const Main = () => {
	const [ search, setSearch ] = useState('');

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(search);
	};

	return (
		<Fragment>
			<div className="landing" />
			<div className="main-page">
				<h1 className="title">Fussy Millenial</h1>

				<form className="search-field" onSubmit={onSubmit}>
					<div className="input-group">
						<input
							type="search"
							name="search"
							className="form-control"
							placeholder="Search ingredients"
							onChange={onChange}
						/>
						<button className="btn btn-secondary">Search</button>
					</div>
				</form>
				<p className="search-example">e.g. chicken, mushroom, onions...</p>
			</div>
		</Fragment>
	);
};

export default Main;
