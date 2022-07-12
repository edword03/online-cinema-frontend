import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { movieService } from '@/services/movie/movie.service';

import { toastError } from '@/utils/error/toast-error';

import { MovieEditInput } from '@/types/edit-types/edit-movie';

import { getAdminUrl } from '@/config/url.config';

export const useEditMovie = (setValue: UseFormSetValue<MovieEditInput>) => {
	const { push, query } = useRouter();
	const id = String(query.id);

	const { isLoading } = useQuery(
		['Movie edit', id],
		() => movieService.getById(id),
		{
			onSuccess({ data }) {
				(Object.keys(data) as Array<keyof MovieEditInput>).forEach((key) => {
					setValue(key, data[key]);
				});
			},
			onError(error) {
				toastError(error);
			},
			enabled: !!query.id,
		}
	);

	const { mutateAsync } = useMutation(
		'Update movie',
		(body: MovieEditInput) => movieService.update(id, body),
		{
			onSuccess() {
				toast.success('Update was successful');
				push(getAdminUrl('movies'));
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const onSubmit: SubmitHandler<MovieEditInput> = async (body) => {
		const newBody = {
			...body,
			title: body.title.trim(),
		};
		await mutateAsync(newBody);
	};

	return { isLoading, onSubmit };
};
