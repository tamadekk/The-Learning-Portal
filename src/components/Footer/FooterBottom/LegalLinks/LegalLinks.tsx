import React from 'react';
import { Link } from 'react-router-dom';

import { LEGAL_LINKS } from 'src/constants/Footer/constants';

const LegalLinks = () => (
	<p className='text-sm text-gray-500'>
		© 2023 Learn, Inc. ·{' '}
		{LEGAL_LINKS.map((link, index) => (
			<React.Fragment key={link.path}>
				<Link to={link.path} className='text-gray-500'>
					{link.label}
				</Link>
				{index < LEGAL_LINKS.length - 1 && ' · '}
			</React.Fragment>
		))}
	</p>
);

export default LegalLinks;
