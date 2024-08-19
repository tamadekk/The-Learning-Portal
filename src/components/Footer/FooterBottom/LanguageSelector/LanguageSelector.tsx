import React from 'react';

import { LANGUAGE_OPTIONS } from 'src/constants/Footer/constants';

const LanguageSelector = () => {
	return (
		<div className='flex justify-center md:justify-start'>
			<select
				id='language-select'
				className='bg-transparent border border-gray-300 p-2 rounded-md text-sm'
			>
				{LANGUAGE_OPTIONS.map((element) => (
					<option>{element}</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSelector;
