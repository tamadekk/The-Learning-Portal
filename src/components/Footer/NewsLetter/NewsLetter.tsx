import React from 'react';

import { emailIcon } from 'src/assets';

import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

const NewsLetter = () => {
	const handleClick = () => {};
	const handleChange = () => {};
	return (
		<section
			aria-labelledby='footer-newsletter'
			className='text-center md:text-left'
		>
			<h2 id='footer-newsletter' className='text-purpleText font-bold mb-2'>
				Subscribe to our newsletter
			</h2>
			<p className='text-sm mb-4'>
				For product announcements and exclusive insights
			</p>
			<div className='flex justify-center md:justify-start'>
				<Input
					type='email'
					name='email'
					id='email'
					placeHolder='Input your email'
					icon={emailIcon}
					onChange={handleChange}
					required
					variant='withIcon'
				/>
				<Button message='Subscribe' onClick={handleClick} />
			</div>
		</section>
	);
};

export default NewsLetter;
