import { Input as UIInput } from '@/components/ui-library/input';
import { type ChangeEvent } from 'react';

type InputType = 'text' | 'search';

type InputProps = {
	id?: string;
	type?: InputType;
	name: string;
	value?: string;
	autocomplete?: string;
	placeholder?: string;
	isInvalid?: boolean;
	spellCheck?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
	id,
	type,
	name,
	value,
	autocomplete,
	placeholder,
	isInvalid,
	spellCheck,
	onChange,
}: InputProps) => {
	return (
		<UIInput
			id={id}
			type={type}
			name={name}
			value={value}
			className="w-full"
			aria-invalid={isInvalid}
			spellCheck={spellCheck}
			placeholder={placeholder}
			autoComplete={autocomplete}
			onChange={onChange}
		/>
	);
};
