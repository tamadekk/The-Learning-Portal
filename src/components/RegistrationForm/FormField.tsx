import React from 'react';

import Input from 'src/common/Input/Input';

interface FormFieldProps {
	id: string;
	label: string;
	type: string;
	name: string;
	placeholder: string;
	value: string;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField = (props: FormFieldProps) => (
	<div>
		<label htmlFor={props.id} className='text-neutral-700 text-md font-bold'>
			{props.label}
		</label>
		<Input
			type={props.type}
			name={props.name}
			id={props.id}
			placeHolder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			required={props.required}
			variant='transparent'
		/>
	</div>
);

export default FormField;
