import React from 'react';

import Button from 'src/common/Button/Button';

import { TBSVideoPic, joinUsBGPic } from '../../assets/index';

export const Home = () => {
	return (
		<>
			<div className='flex flex-col items-center mt-24 gap-14'>
				<div className=''>
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

				<div className='flex justify-center'>
					<img src={TBSVideoPic} alt='Promotional video thumbnail' />
				</div>

				<div
					className='flex flex-col items-center justify-center mt-24 w-3/4 h-96 bg-cover bg-center mb-14'
					style={{
						backgroundImage: `url(${joinUsBGPic}) `,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex flex-col items-center w-1/3'>
						<h1 className='text-4xl font-bold text-indigo-700 mb-4 text-nowrap'>
							Join us
						</h1>
						<p className='text-gray-600 mb-6 text-center'>
							Qui ut exercitation officia proident enim non tempor tempor ipsum
							ex nulla ea adipisicing sit consequat enim elit cupidatat o
						</p>
					</div>
					<Button message='Join us' />
				</div>
			</div>
		</>
	);
};

export default Home;