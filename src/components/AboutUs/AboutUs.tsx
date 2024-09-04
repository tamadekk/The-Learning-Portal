import React from 'react';
import TraineeCard from './TraineeCard';
import { aboutUsPicture } from 'src/assets';
import { teamMembers } from 'src/constants/AboutUs/constants';

const AboutUs = () => {
	return (
		<div className='flex justify-center items-center py-14 px-4 sm:px-6 lg:px-8'>
			<div className='flex flex-col justify-center items-center max-w-screen-md lg:max-w-screen-lg w-full'>
				<div className='flex flex-col gap-7 mb-20 w-3/4'>
					<h1 className='text-5xl text-nowrap text-neutral-900 font-bold text-center'>
						About Us
					</h1>
					<p className='text-xl text-neutral-500 text-center'>
						Welcome to the 'About Us' section of Learn Platform, where we aim to
						provide you with a deeper understanding of our philosophy, values,
						and mission. Established in 2023, Learn Platform was born out of a
						passion for learning and a belief in the power of knowledge to
						transform lives.
					</p>
				</div>
				<img
					className='shadow-m rounded-xl w-full mb-14'
					src={aboutUsPicture}
					alt='A group of people looking at laptop'
				/>
				<div className='flex flex-col gap-6 items-center lg:flex-row lg:items-start lg:w-full'>
					<div className='lg:w-64'>
						<h2 className='text-5xl text-center text-wrap text-neutral-900 font-bold lg:text-left lg:text-nowrap'>
							Our Team
						</h2>
						<p className='text-xl text-center text-neutral-500 md:text-left'>
							Aliqua ipsum tempor aliqua eiusmod lorem ad labore culpa aliquip
						</p>
					</div>
					{teamMembers.map((member, index) => (
						<TraineeCard
							key={index}
							name={member.name}
							title={member.title}
							description={member.description}
							image={member.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
