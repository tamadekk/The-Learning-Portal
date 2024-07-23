import React from 'react';

import Button from 'src/common/Button/Button';
import TBSVideoPic from '../../assets/Home/TBS-Video.png';

export const Home = () => {
	return (
		<>
			<section>
				<div className='flex flex-col items-center mt-24 mb-14'>
					<div className='mb-10'>
						<h1 className='text-center text-5xl text-headerTextColor font-montserrat font-semibold'>
							Let's start learning
						</h1>
					</div>
					<div className='text-center w-2/5'>
						<p className='text-xl text-nonPrimeText font-montserrat leading-relaxed'>
							Welcome to Learn Platform - where every day is a day to learn.
							Dive into the vast ocean of knowledge and empower yourself with
							the tools for a successful tomorrow. Happy learning!
						</p>
					</div>
				</div>
				<div className='flex justify-center'>
					<img src={TBSVideoPic} alt='To be Soon - video pic' />
				</div>

				<div className='flex justify-center bg-slate-300'>
					<div className='relative bg-white p-8 rounded-lg shadow-lg max-w-xl text-center'>
						<div className='absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full -mt-16 -ml-16'></div>
						<div className='absolute top-0 right-0 w-24 h-24 border-4 border-yellow-400 rounded-full -mt-12 -mr-12'></div>
						<div className='absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full -mb-12 -ml-12'></div>
						<div className='absolute top-16 right-0 w-12 h-12 bg-purple-300 rounded-full -mr-12'></div>
						<h1 className='text-4xl font-bold text-indigo-700 mb-4'>Join us</h1>
						<p className='text-gray-600 mb-6'>
							Qui ut exercitation officia proident enim non tempor tempor ipsum
							ex nulla ea adipisicing sit consequat enim elit cupidatat o
						</p>
						<Button message='Join us' />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
