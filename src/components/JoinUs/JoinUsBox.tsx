import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'src/common/Button/Button';

interface JoinUsBoxProps {
	role: string;
	image: string;
}

const JoinUsBox = (props: JoinUsBoxProps) => {
	return (
		<div className='flex justify-center items-center p-16 rounded'>
			<div className='flex flex-col gap-5 pt-6 items-center md:pl-14 min-w-96 sm:w-full md:flex-row lg:pt-0 max-w-screen-lg bg-neutral-50 rounded-xl'>
				<div className='flex flex-col text-center justify-between gap-2 md:w-1/2 md:text-left'>
					<h2 className='text-4xl text-headerTextColor font-bold'>
						Register as {props.role}
					</h2>
					<p className='text-lg text-gray-700'>
						Do consectetur proident proident id eiusmod deserunt consequat
						pariatur ad ex velit do Lorem reprehenderit.
					</p>
					<Link to='/login'>
						<Button message='Join us' />
					</Link>
				</div>
				<div className='w-1/2'>
					<img
						className='rounded-r-lg'
						src={props.image}
						alt='Group of people'
					/>
				</div>
			</div>
		</div>
	);
};

export default JoinUsBox;