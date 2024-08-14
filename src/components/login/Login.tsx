import React, { useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';
import reCAPTCHAkey from '../../reCAPTCHAkey';

import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';

import { userIcon, padlockIcon, eyeOn, eyeOff } from '../../assets/index';

const Login = () => {
	const [form, setForm] = useState({
		username: '',
		password: '',
	});
	const [captchaCompleted, setCaptchaCompleted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!captchaCompleted) {
			alert('Please complete the captcha before submitting!');
			return;
		}
		if (!(form.username && form.password)) console.log('Error!');
		setIsSubmitting(true);
		// TODO: submit to server
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitting(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleToggle = () => {
		setPasswordVisible(!isPasswordVisible);
		console.log(isPasswordVisible);
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
							type={isPasswordVisible ? 'text' : 'password'}
							id='password'
							placeHolder='Enter password'
							required
							onChange={handleInputChange}
						>
							<div className='absolute right-3 top-3'>
								<button type='button' onClick={handleToggle}>
									<img
										src={isPasswordVisible ? eyeOn : eyeOff}
										className='w-4'
										alt='Toggle visibility'
									/>
								</button>
							</div>
						</Input>
					</div>
					<Button message='Sign in' disabled={isSubmitting} />
					<p className='text-xs text-nonPrimeText font-poppins font-bold'>OR</p>
					<p className='text-sm text-nonPrimeText font-poppins'>
						Don't have an account?{' '}
						<span className='text-indigo-700 font-bold cursor-pointer'>
							Sign up
						</span>
					</p>
					<ReCAPTCHA sitekey={reCAPTCHAkey} onChange={handleCaptchaChange} />
				</form>
			</div>
		</div>
	);
};

export default Login;
