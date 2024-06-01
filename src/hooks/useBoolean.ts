import { useState } from 'react';

export const useBoolean = (defaultValue: boolean = false) => {
	const [state, setState] = useState(defaultValue);

	const setTrue = () => {
		setState(() => true);
	};

	const setFalse = () => {
		setState(() => false);
	};

	const toggle = () => {
		setState(() => !state);
	};

	const setOwn = (value: boolean) => {
		setState(() => value);
	};

	return {
		state,
		setTrue,
		setFalse,
		toggle,
		setOwn,
	};
};
