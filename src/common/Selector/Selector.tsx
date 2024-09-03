import React from 'react';

interface SelectorProps {
	id: string;
	name: string;
	className?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	required?: boolean;
	options: string[];
}
const Selector = (props: SelectorProps) => {
	return (
		<select
			id={props.id}
			name={props.name}
			className={`bg-transparent border border-gray-300 p-2 rounded-md text-sm ${props.className}`}
			value={props.value}
			onChange={props.onChange}
		>
			{props.options.map((option, index) => (
				<option className='bg-white  rounded-m ' key={index} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Selector;
