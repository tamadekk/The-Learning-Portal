import React, { useState } from 'react';

import FormField from './FormField';
import Selector from 'src/common/Selector/Selector';
import Button from 'src/common/Button/Button';

import { regTrainee, regStudent } from 'src/assets';

import { specializations } from 'src/constants/Registration/constants';

const testRole = 'Student';

const Registration = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		specialization: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSpecialization = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, specialization: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitting(false);
	};
	const displayImage = (role) => {
		return role === 'Student' ? regStudent : regTrainee;
	};

	return (
		<div className='flex justify-center items-center py-24'>
			<div className='flex flex-col'>
				<div className='flex flex-col gap-4 mb-9'>
					<h1 className='text-left text-5xl text-headerTextColo font-semibold'>
						Registration
					</h1>
					<p className='text-left text-neutral-500'>{testRole}</p>
				</div>
				<div className='flex min-h-fit gap-24'>
					<img
						src={displayImage(testRole)}
						alt='A man with a laptop'
						className='w-[451px] h-[625px] border-xl rounded-xl'
					/>
					<form
						className='flex flex-col gap-6 w-[629px] min-h-fit'
						onSubmit={handleSubmit}
					>
						<FormField
							label='First Name'
							type='text'
							name='firstName'
							id='firstName'
							placeholder='Input text'
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
						<FormField
							label='Last Name'
							type='text'
							name='lastName'
							id='lastName'
							placeholder='Input text'
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
						<FormField
							label='Email'
							type='email'
							name='email'
							id='email'
							placeholder='Input text'
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<div>
							<label className='text-neutral-700 text-md font-bold'>
								Specialization
							</label>
							<Selector
								id='{undefined}'
								name='specialization'
								className='w-full'
								options={specializations}
								value={formData.specialization}
								onChange={handleSpecialization}
								required
							/>
						</div>
						<Button
							type='submit'
							message='Submit'
							disabled={isSubmitting}
							size='large'
							className='mt-auto'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registration;
