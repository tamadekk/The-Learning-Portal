import React, { useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';
import reCAPTCHAkey from '../../reCAPTCHAkey';

import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';

import userIcon from '../../assets/Login/userIcon.svg';
import padlockIcon from '../../assets/Login/padlockIcon.svg';

const Login = () => {
	const [form, setForm] = useState({
		username: '',
		password: '',
	});
	const [captchaCompleted, setCaptchaCompleted] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!captchaCompleted) {
			alert('Please complete the captcha before submitting!');
			return;
		}
		console.log('Form submitted:', form);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleCaptchaChange = (value: string | null) => {
		setCaptchaCompleted(value ? true : false);
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='flex flex-col items-center gap-5'>
				<p className='text-3xl text-headerTextColor font-montserrat font-semibold'>
					Sign in
				</p>
				<p className='text-xl text-nonPrimeText font-montserrat'>
					Welcome back
				</p>

				<form
					className='flex flex-col items-center gap-3'
					onSubmit={handleSubmit}
				>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold font-poppins'>
							User name
						</label>
						<Input
							icon={userIcon}
							name='username'
							type='text'
							id='username'
							placeHolder='Enter email'
							required
							onChange={handleInputChange}
						/>
					</div>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold font-poppins'>
							Password
						</label>
						<Input
							icon={padlockIcon}
							name='password'
							type='password'
							id='password'
							placeHolder='Enter password'
							required
							onChange={handleInputChange}
						/>
					</div>
					<ReCAPTCHA sitekey={reCAPTCHAkey} onChange={handleCaptchaChange} />
					<Button message='Sign in' />
					<p className='text-xs text-nonPrimeText font-poppins font-bold'>OR</p>
					<p className='text-sm text-nonPrimeText font-poppins'>
						Don't have an account?{' '}
						<span className='text-indigo-700 font-bold cursor-pointer'>
							Sign up
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
