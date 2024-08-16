import React, { ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'src/lib/utils';

const buttonVariants = cva('text-white rounded-md disabled:opacity-40', {
	variants: {
		variant: {
			primeButton:
				'bg-buttonPrime hover:bg-buttonPrimeHover focus:bg-buttonPrimePressed',
			secondaryButton:
				'bg-buttonSecondary hover:bg-buttonSecondaryHover focus:bg-buttonSecondaryPressed',
			importantButton:
				'bg-buttonImportant hover:bg-buttonImportantHover focus:bg-buttonImportantPressed',
		},
		size: {
			default: 'w-24 h-10',
			large: 'w-full h-10',
		},
	},
	defaultVariants: {
		variant: 'primeButton',
		size: 'default',
	},
});

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	message?: string;
}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.message}
		</button>
	);
};

export default Button;
