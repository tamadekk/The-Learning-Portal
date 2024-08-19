import React from 'react';

interface InputProps {
	icon?: string;
	type: string;
	name: string;
	id: string;
	placeHolder: string;
	value?: string;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
}

const Input = (props: InputProps) => {
	return (
		<div className='relative flex items-center'>
			{props.icon && (
				<img
					src={props.icon}
					alt={`${props.name} icon`}
					className='absolute left-3'
				/> // TODO : don't use layout style for reuseable elements
			)}
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				placeholder={props.placeHolder}
				value={props.value}
				required={props.required}
				onChange={props.onChange}
				className={'w-full ps-10 p-2.5 bg-bgInput rounded-md  text-sm'}
			/>
			{props.children}
		</div>
	);
};

export default Input;
