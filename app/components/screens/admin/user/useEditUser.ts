import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { userService } from '@/services/user/user.service';

import { toastError } from '@/utils/error/toast-error';

import { UserEditInput } from '@/types/edit-types/edit-user';

import { getAdminUrl } from '@/config/url.config';

export const useEditUser = (setValue: UseFormSetValue<UserEditInput>) => {
	const { push, query } = useRouter();
	const id = String(query.id);

	const { isLoading } = useQuery(
		['User edit', id],
		() => userService.getById(id),
		{
			onSuccess({ data }) {
				setValue('email', data.email);
				setValue('isAdmin', data.isAdmin);
			},
			onError(error) {
				toastError(error);
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'Update user',
		(body: UserEditInput) => userService.update(id, body),
		{
			onSuccess() {
				toast.success('Update was successful');
				push(getAdminUrl('users'));
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const onSubmit: SubmitHandler<UserEditInput> = async (body) => {
		const newBody: UserEditInput = {
			...body,
			email: body.email.trim(),
		};
		await mutateAsync(newBody);
	};

	return { isLoading, onSubmit };
};
