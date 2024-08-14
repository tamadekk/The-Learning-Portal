import React from 'react';

interface ButtonProps {
	message: string;
	disabled?: boolean;
	onClick?: () => void;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className='w-full h-10 bg-buttonPrime hover:bg-buttonPrimeHover focus:bg-buttonPrimePressed disabled:bg-slate-600 text-white rounded-md'
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.message}
		</button>
	);
};

export default Button;
