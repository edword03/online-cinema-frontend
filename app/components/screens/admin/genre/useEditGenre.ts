import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { genreService } from '@/services/genre/genre.service';

import { toastError } from '@/utils/error/toast-error';

import { EditGenreInput } from '@/types/edit-genre';

import { getAdminUrl } from '@/config/url.config';

export const useEditGenre = (setValues: UseFormSetValue<EditGenreInput>) => {
	const { push, query } = useRouter();
	const genreId = String(query.id);

	const { isLoading } = useQuery(
		['Genre-id', genreId],
		() => genreService.getById(genreId),
		{
			onSuccess({ data }) {
				(Object.keys(data) as Array<keyof EditGenreInput>).forEach((key) => {
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
		'update genre',
		(body: EditGenreInput) => genreService.update(genreId, body),
		{
			onSuccess() {
				toast.success('Update was successful');
				push(getAdminUrl('genres'));
			},
			onError(error) {
				toastError(error);
			},
		}
	);

	const onSubmit: SubmitHandler<EditGenreInput> = async (body) => {
		await mutateAsync(body);
	};

	return { onSubmit, isLoading };
};
