import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'src/common/Logo/Logo';
import ProfileCard from './ProfileCard/ProfileCard';
import Button from 'src/common/Button/Button';
import NavBar from './NavBar';

import { closeIcon, hamburgerIcon } from 'src/assets';
import {
	desktopNavLinks,
	mobileNavLinks,
} from 'src/constants/Header/constants';
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<header>
			<div className='flex justify-center items-center sm:justify-normal sm:border-b'>
				<Button
					className='absolute left-4 sm:hidden'
					onClick={handleClick}
					variant='icon'
				>
					<img src={hamburgerIcon} alt='Menu icon' />
				</Button>
				<Logo className='sm:ml-4 sm:mr-4' />
				<div className='hidden sm:flex sm:flex-row  sm:items-center sm:gap-5'>
					<NavBar links={desktopNavLinks} />
				</div>
				<div className='hidden sm:flex sm:items-center sm:absolute right-4 space-x-4'>
					<a className='text-primary-500' href='/login'>
						Sign in
					</a>
					<Link to='/join-us'>
						<Button message='Join us' />
					</Link>
				</div>

				{isMenuOpen && (
					<div className='absolute top-0 left-0 pl-4 pt-4 max-w-3/5 h-dvh border-r border-b bg-white sm:hidden'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-row gap-16'>
								<ProfileCard />
								<Button onClick={handleClick} variant='icon'>
									<img src={closeIcon} alt='Menu icon' />
								</Button>
							</div>
							<NavBar links={mobileNavLinks} />
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
