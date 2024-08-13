import React from 'react';

interface Props {
	icon?: string;
	name: string;
	type: string;
	id: string;
	placeHolder: string;
	required: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
	return (
		<div className='relative'>
			<div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
				{props.icon && <img src={props.icon} alt='icon' className='w-4 h-4' />}
			</div>
			<input
				className='w-full ps-10 p-2.5 bg-bgInput rounded-md font-poppins font-extralight text-sm'
				name={props.name}
				type={props.type}
				id={props.id}
				placeholder={props.placeHolder}
				onChange={props.onChange}
				required={props.required}
			/>
		</div>
	);
};

export default Input;
