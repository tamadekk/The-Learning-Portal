import React from 'react';

import Button from 'src/common/Button/Button';

import { TBSVideoPic, joinUsBGPic } from '../../assets/index';

export const Home = () => {
	return (
		<section>
			<div className='flex flex-col items-center mt-24 mb-14'>
				<div className='mb-10'>
					<h1 className='text-center text-5xl text-headerTextColor font-montserrat font-semibold'>
						Let's start learning
					</h1>
				</div>
				<div className='text-center w-2/5'>
					<p className='text-xl text-nonPrimeText font-montserrat leading-relaxed'>
						Welcome to Learn Platform - where every day is a day to learn. Dive
						into the vast ocean of knowledge and empower yourself with the tools
						for a successful tomorrow. Happy learning!
					</p>
				</div>
			</div>
			<div className='flex justify-center'>
				<img src={TBSVideoPic} alt='Promotional video thumbnail' />
			</div>

			<div className='flex justify-center mt-24 w-screen'>
				<div
					className='p-8 rounded-lg shadow-lg max-w-xl text-center w-screen'
					style={{
						backgroundImage: `url(${joinUsBGPic})`,
						backgroundSize: 'cover',
					}}
				>
					<h1 className='text-4xl font-bold text-indigo-700 mb-4'>Join us</h1>

					<p className='text-gray-600 mb-6'>
						Qui ut exercitation officia proident enim non tempor tempor ipsum ex
						nulla ea adipisicing sit consequat enim elit cupidatat o
					</p>
					<Button message='Join us' />
				</div>
			</div>
		</section>
	);
};

export default Home;
