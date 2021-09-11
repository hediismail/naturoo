import {
    FAIL_USER,
	LOAD_USER,
	REGISTER_USER,
	LOGIN_USER,
	CURRENT_USER,
	// FAIL_USER,
	 LOGOUT_USER,
	
} from '../Const/authConst.js';

import axios from 'axios';


export const registerUser = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('app/auth/register', user); //{newUser+msg+token}
		dispatch({ type: REGISTER_USER, payload: result.data });
	     history.push('/panier');
	} catch (error) {
			const { errors, msg } = error.response.data;
			if (Array.isArray(errors)) {
				errors.forEach((err) => alert(err.msg));
			}
			if (msg) {
				alert(msg);
			}
	}
};

export const loginUser = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('app/auth/login', user); //{newUser+msg+token}
		dispatch({ type: LOGIN_USER, payload: result.data });
	    console.log(user)  
		user && user.email ==='admin@gmail.com'?
		history.push('/dashboard'): history.push('/');
	} catch (error) {
		const { errors, msg } = error.response.data;
		if (Array.isArray(errors)) {
			errors.forEach((err) => alert(err.msg));
		}
		if (msg) {
			alert(msg);
		}
	}
};

export const current = () => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	const options = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		let result = await axios.get('app/auth/current', options);
		//  user
		dispatch({ type: CURRENT_USER, payload: result.data.user });
	} catch (error) {
		dispatch({ type: FAIL_USER, payload: error.response.data });
	}
};


export const logout = () => {
	return {
		type: LOGOUT_USER,
	};
};