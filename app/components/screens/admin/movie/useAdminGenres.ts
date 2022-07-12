import { useQuery } from 'react-query';

import { genreService } from '@/services/genre/genre.service';

import { toastError } from '@/utils/error/toast-error';

import { OptionsSelect } from '@/types/select';

export const useAdminGenres = () => {
	return useQuery('list of genres dropdown', () => genreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): OptionsSelect => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError(error) {
			toastError(error);
		},
	});
};
