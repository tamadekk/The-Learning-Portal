import React from 'react';

interface ButtonProps {
	message: string;
}

const Button = (props: ButtonProps) => {
	return (
		<button className='w-full h-10 bg-buttonPrime hover:bg-buttonPrimeHover focus:bg-buttonPrimePressed text-white rounded-md'>
			{props.message}
		</button>
	);
};

export default Button;
