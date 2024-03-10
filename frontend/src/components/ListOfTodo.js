import React, { useEffect } from 'react';
import axios from 'axios';
// import Nav from '../navbar/Nav.js';
export default function ListOfTodo({ token }) {
	useEffect(() => {
		if (token) {
			fetchData(token);
		}
	}, [token]);

	const fetchData = async (token) => {
		const res = await axios.get('http://localhost:3001/api/todos', {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		});
		console.log(res.data);
	};

	return (
		<div></div>
		// <Nav/>
	);
}