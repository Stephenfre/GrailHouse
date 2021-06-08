import { useState } from "react";

export default function useSignUpForm(callback) {
	const [inputs, setInputs] = useState({});

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
		}
		callback();
	};
	const handleInputChanges = (e) => {
		e.persist();
		setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
	};
	return {
		handleSubmit,
		handleInputChanges,
		inputs,
	};
}
