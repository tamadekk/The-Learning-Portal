import React from 'react';
import { Link } from 'react-router-dom';

import { FOOTER_MENU_LINKS } from 'src/constants/Footer/constants';

const FooterMenuSection = () => {
	return (
		<>
			{FOOTER_MENU_LINKS.map((element) => (
				<section key={element.title} className='text-center md:text-left'>
					<h2 className='font-bold mb-4'>{element.title}</h2>
					<ul>
						{element.links.map((link) => (
							<li key={link.path} className='mb-2'>
								<Link to={link.path}>{link.label}</Link>
							</li>
						))}
					</ul>
				</section>
			))}
		</>
	);
};

export default FooterMenuSection;