import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Meta } from '@/components/SEO/Meta';
import { AuthField } from '@/components/screens/auth/AuthField';

import { Heading } from '@/ui/Heading/Heading';
import { Button } from '@/ui/form-field/Button';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import styles from './Auth.module.scss';
import { useAuthRedirect } from './useAuthRedirect';

interface AuthInput {
	email: string;
	password: string;
}

export const Auth: FC = () => {
	useAuthRedirect();
	const { isLoading } = useAuth();
	const [formType, setFormType] = useState<'login' | 'register'>('login');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<AuthInput>({
		mode: 'onTouched',
	});

	const { register, login } = useActions();

	const onSubmitForm: SubmitHandler<AuthInput> = (data) => {
		if (formType === 'login') login(data);

		if (formType === 'register') register(data);

		reset();
	};

	return (
		<>
			<Meta title="Sign up" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmitForm)}>
					<Heading title="Auth" className="mb-6" />
					<AuthField
						register={registerInput}
						formState={formState}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setFormType('login')}
							disabled={isLoading}
						>
							Log in
						</Button>
						<Button
							type="submit"
							onClick={() => setFormType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>
	);
};
