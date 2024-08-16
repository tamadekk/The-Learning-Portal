import React from 'react';

interface ButtonProps {
	message: string;
	disabled?: boolean;
	onClick?: () => void;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className='w-24 h-10 bg-buttonPrime hover:bg-buttonPrimeHover focus:bg-buttonPrimePressed disabled:bg-opacity-0.4 text-white rounded-md'
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.message}
		</button>
	);
};

export default Button;
