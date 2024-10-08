import React, { useState } from 'react';

import {
	FOOTER_SOCIAL_LINKS,
	LANGUAGE_OPTIONS,
} from 'src/constants/Footer/constants';

import LegalLinks from './LegalLinks/LegalLinks';
import Selector from 'src/common/Selector/Selector';

const FooterBottom = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('');

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};
	return (
		<aside className='container mx-auto mt-10 border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center px-4 text-nowrap'>
			<Selector
				id='language-select'
				name='language'
				options={LANGUAGE_OPTIONS}
				value={selectedLanguage}
				onChange={handleLanguageChange}
				className='w-1/3'
			/>
			<LegalLinks />
			<div className='flex justify-center md:justify-end space-x-4'>
				{FOOTER_SOCIAL_LINKS.map((item, index) => (
					<a key={index} href={item.href}>
						<img src={item.icon} alt={item.alt} />
					</a>
				))}
			</div>
		</aside>
	);
};

export default FooterBottom;
