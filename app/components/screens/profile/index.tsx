import { useForm } from 'react-hook-form';

import { Meta } from '@/components/SEO/Meta';
import { AuthField } from '@/components/screens/auth/AuthField';
import { ProfileInput } from '@/components/screens/profile/profile.interface';
import { useProfile } from '@/components/screens/profile/useProfile';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { Button } from '@/ui/form-field/Button';

import styles from './Profile.module.scss';

export const Profile = () => {
	const { handleSubmit, register, formState, setValue } = useForm<ProfileInput>(
		{
			mode: 'onBlur',
		}
	);

	const { isLoading, submitHandler } = useProfile(setValue);

	return (
		<>
			<Meta title="Profile" />
			<Heading title="Profile" className="mb-6" />

			<form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<>
						<AuthField register={register} formState={formState} />
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	);
};
