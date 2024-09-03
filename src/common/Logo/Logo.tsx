import React from 'react';

import { logo } from 'src/assets';

interface LogoProps {
	className?: string;
}

const Logo = (props: LogoProps) => {
	return (
		<img className={props.className} src={logo} alt='The Learn App logo' />
	);
};

export default Logo;
