import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { useDebounce } from '@/hooks/useDebounce';

import { movieService } from '@/services/movie/movie.service';

import { toastError } from '@/utils/error/toast-error';
import { getGenresList } from '@/utils/movie/getGenreString';

import { TableItemType } from '@/types/table-item';

import { getAdminUrl } from '@/config/url.config';

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const { push } = useRouter();

	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => movieService.getAllMovies(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): TableItemType => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						tableItems: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),
			onError: (error) => {
				toastError(error);
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: deleteMovie } = useMutation(
		'delete movie',
		(movieId: string) => movieService.deleteMovie(movieId),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: () => {
				toast.success('Movie delete was successful');
				queryData.refetch();
			},
		}
	);

	const { mutateAsync: crateMovie } = useMutation(
		'Create movie',
		() => movieService.create(),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Movie create was successful');
				push(getAdminUrl(`movie/edit/${_id}`));
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			deleteMovie,
			...queryData,
			searchTerm,
			crateMovie,
		}),
		[deleteMovie, queryData, searchTerm, crateMovie]
	);
};
