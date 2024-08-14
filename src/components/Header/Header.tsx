import React from 'react';
import { headerLogo } from '../../assets/index';
import Button from 'src/common/Button/Button';

const Header = () => {
	return (
		<div className='border-b'>
			<header>
				<div className='flex items-center justify-between font-poppins gap-2'>
					<div className='flex items-center'>
						<img
							src={headerLogo}
							alt='The learning portal logo'
							className='mr-4'
						/>
						<nav>
							<ul className='flex space-x-4 text-nonPrimeText'>
								<li>Blog</li>
								<li>Pricing</li>
								<li>About us</li>
							</ul>
						</nav>
					</div>
					<div className='flex items-center space-x-4 mr-5'>
						<p className='text-indigo-500 text-nowrap'>Sign in</p>
						<Button message='Join us' />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
