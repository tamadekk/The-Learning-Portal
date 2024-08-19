import React from 'react';

import { FOOTER_SOCIAL_LINKS } from 'src/constants/Footer/constants';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import LegalLinks from './LegalLinks/LegalLinks';

const FooterBottom = () => {
	return (
		<aside className='container mx-auto mt-10 border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center px-4 text-nowrap'>
			<LanguageSelector />
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
