import React from 'react';
import Input from 'src/common/Input/Input';
import Button from 'src/common/Button/Button';

import userIcon from '../../assets/Login/userIcon.svg';
import padlockIcon from '../../assets/Login/padlockIcon.svg';

const Login = () => {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='flex flex-col items-center gap-2'>
				<p className='text-3xl text-headerTextColor font-montserrat font-semibold'>
					Sign in
				</p>
				<p className='text-xl text-nonPrimeText font-montserrat'>
					Welcome back
				</p>
				<form className='flex flex-col items-center gap-3'>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold font-poppins'>
							User name
						</label>
						<Input
							icon={userIcon}
							name='Username'
							type='text'
							id='username'
							placeHolder='Enter email'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label className='text-sm font-semibold font-poppins'>
							Password
						</label>
						<Input
							icon={padlockIcon}
							name='Password'
							type='password'
							id='password'
							placeHolder='Enter password'
							required
						/>
					</div>
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
