import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { ProfileInput } from '@/components/screens/profile/profile.interface';

import { userService } from '@/services/user/user.service';

import { toastError } from '@/utils/error/toast-error';

export const useProfile = (setValue: UseFormSetValue<ProfileInput>) => {
	const { isLoading } = useQuery('profile', () => userService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email);
		},
		onError(error) {
			toastError(error);
		},
	});

	const { mutateAsync: updateAsync } = useMutation(
		'Update profile',
		(data: ProfileInput) => userService.updateProfile(data),
		{
			onSuccess() {
				toast.success('Updated was successful');
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const submitHandler: SubmitHandler<ProfileInput> = async (body) => {
		await updateAsync(body);
	};

	return { isLoading, submitHandler };
};
