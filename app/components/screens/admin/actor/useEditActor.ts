import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { actorsService } from '@/services/actors/actors.service';

import { toastError } from '@/utils/error/toast-error';

import { EditActorInput } from '@/types/edit-types/edit-actor';

import { getAdminUrl } from '@/config/url.config';

export const useEditActor = (setValues: UseFormSetValue<EditActorInput>) => {
	const { push, query } = useRouter();
	const id = String(query.id);

	const { isLoading } = useQuery(
		['Actor edit', id],
		() => actorsService.getById(id),
		{
			onSuccess({ data }) {
				(Object.keys(data) as Array<keyof EditActorInput>).forEach((key) => {
					setValues(key, data[key]);
				});
			},
			onError(error) {
				toastError(error);
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'Update actor',
		(body: EditActorInput) => actorsService.update(id, body),
		{
			onSuccess() {
				toast.success('Update was successful');
				push(getAdminUrl('actors'));
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const onSubmit: SubmitHandler<EditActorInput> = async (body) => {
		const newBody = { ...body, name: body.name.trim() };
		await mutateAsync(newBody);
	};

	return { isLoading, onSubmit };
};
