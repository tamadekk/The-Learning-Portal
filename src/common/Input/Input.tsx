import React, { InputHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'src/lib/utils';

const inputVariants = cva(
	'ps-10 p-2.5 pl-3 bg-bgInput rounded-md  text-sm outline-none focus:border-white',
	{
		variants: {
			variant: {
				default: '',
				withIcon: 'pl-10',
				transparent: 'bg-transparent border',
			},
			size: {
				default: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {
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

const Input = ({ className, size, variant, ...props }: InputProps) => {
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
				className={cn(inputVariants({ variant, size, className }))}
			/>
			{props.children}
		</div>
	);
};

export default Input;
