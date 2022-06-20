import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import { Field } from '@/ui/form-field/Field';

import { validEmail } from '@/constants/regex';

interface AuthFieldProps {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

export const AuthField: FC<AuthFieldProps> = ({
	register,
	isPasswordRequired = false,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				placeholder="Email"
				error={errors.email}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter valid email address',
					},
				})}
			/>
			<Field
				placeholder="Password"
				error={errors.password}
				type="password"
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length have to more 6 symbols',
								},
						  }
						: {}
				)}
			/>
		</>
	);
};
