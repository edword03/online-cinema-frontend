import { MouseEvent } from 'react';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { Meta } from '@/components/SEO/Meta';
import { useEditUser } from '@/components/screens/admin/user/useEditUser';
import { AuthField } from '@/components/screens/auth/AuthField';

import { Heading } from '@/ui/Heading/Heading';
import { SkeletonLoader } from '@/ui/SkeletonLoader';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { Button } from '@/ui/form-field/Button';

import { UserEditInput } from '@/types/edit-types/edit-user';

export const EditUser = () => {
	const { handleSubmit, setValue, formState, register, control } =
		useForm<UserEditInput>({
			mode: 'onBlur',
		});

	const { isLoading, onSubmit } = useEditUser(setValue);

	const handleIsAdmin = (
		event: MouseEvent<HTMLButtonElement>,
		field: ControllerRenderProps<any, any>
	) => {
		event.preventDefault();
		field.onChange(!field.value);
	};

	return (
		<>
			<Meta title="Edit user" />
			<AdminNav />
			<Heading title="Edit user" />
			<form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthField register={register} formState={formState} />
						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									onClick={(event) => handleIsAdmin(event, field)}
									className="text-link block mb-7"
								>
									{field.value ? 'Set as user role' : 'Set as admin role'}
								</button>
							)}
						/>
					</>
				)}
				<Button>Update</Button>
			</form>
		</>
	);
};
