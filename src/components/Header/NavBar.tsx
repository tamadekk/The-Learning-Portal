import React from 'react';
import { useLocation } from 'react-router-dom';

interface Links {
	href: string;
	label: string;
}

interface NavBarProps {
	links: Links[];
}

const NavBar = (props: NavBarProps) => {
	const pathName = useLocation().pathname;
	return (
		<>
			{props.links.map((item) => (
				<nav key={item.href}>
					<a
						href={item.href}
						className={`block p-4 ${
							pathName === item.href
								? 'border-l-8 border-purpleText text-primary-500 font-bold sm:border-none sm:text-inherit sm:font-normal'
								: ''
						}`}
					>
						{item.label}
					</a>
				</nav>
			))}
		</>
	);
};

export default NavBar;
